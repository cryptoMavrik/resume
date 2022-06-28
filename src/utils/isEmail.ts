import { EmailOptionsType } from "./types";

const email_options: EmailOptionsType = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: '',
    ignore_max_length: false,
    host_blacklist: [],
};

const splitNameAddress = /^([^-\x7F-\x9F\cX]+)</i;
const emailUserPart = /^[a-z\d!#%&'\-=_`{}~]/i;
const gmailUserPart = /^[a-z\d]/;
const quotedEmailUser = /^([\s--\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[--\x7f]))*$/i;
const emailUserUtf8Part = /^[a-z\d!#%&'\-=_`{}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
const quotedEmailUserUtf8 = /^([\s--\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[--\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
const defaultMaxEmailLength = 254;

function validateDisplayName(display_name: string) {
    const display_name_without_quotes = display_name.replace(/^"(.+)"$/, '$1');
    if (!display_name_without_quotes.trim()) {
        return false;
    }
    const contains_illegal = /[";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
        if (display_name_without_quotes === display_name) {
            return false;
        }
        const all_start_with_back_slash =
            display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) {
            return false;
        }
    }
    return true;
}

function assertString(input: any) {
    const isString = typeof input === 'string' || input instanceof String;

    if (!isString) {
        let invalidType: any = typeof input;
        if (input === null) invalidType = 'null';
        else if (invalidType === 'object') invalidType = input.constructor.name;

        throw new TypeError(`Expected a string but received a ${invalidType}`);
    }
}

function isByteLength(str: string, options: any) {
    assertString(str);
    let min;
    let max;
    if (typeof (options) === 'object') {
        min = options.min || 0;
        max = options.max;
    } else {
        min = arguments[1];
        max = arguments[2];
    }
    const len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === 'undefined' || len <= max);
}


export default function isEmail(str = "", options = email_options) {
    assertString(str);
    const splice = str.split("@")
    const userName = splice[0]
    if (splice.length > 1 && splice[0]) {
        const domainSlug = splice[1].split(".")
        const carrier = domainSlug[0]
        const tld = domainSlug[1]
        if (!splice || !userName || !domainSlug || !carrier || !tld) {
            return false
        }
        if (tld.length < 2 && tld.split(" ").length === 1) {
            return false
        }
    } else if (str.endsWith(" ")) {
        return false
    }


    if (!str.split(" ").includes(str)) {
        return false
    }

    if (options.require_display_name || options.allow_display_name) {
        const display_email = str.match(splitNameAddress);
        if (display_email) {
            let display_name = display_email[1];
            str = str.replace(display_name, '').replace(/(^<|>$)/g, '');
            if (display_name.endsWith(' ')) {
                display_name = display_name.substr(0, display_name.length - 1);
            }

            if (!validateDisplayName(display_name)) {
                return false;
            }
        } else if (options.require_display_name) {
            return false;
        }
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
        return false;
    }

    const parts = str.split('@');
    const domain = parts.pop();
    const lower_domain = domain?.toLowerCase();
    let user = parts.join('@');

    if ((lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
        user = user.toLowerCase();
        const username = user.split('+')[0];

        // Dots are not included in gmail length restriction
        if (!isByteLength(username.replace(/\./g, ''), { min: 6, max: 30 })) {
            return false;
        }

        const user_parts = username.split('.');
        for (let i = 0; i < user_parts.length; i++) {
            if (!gmailUserPart.test(user_parts[i])) {
                return false;
            }
        }
    }

    if (options.ignore_max_length === false &&
        domain && (
            !isByteLength(user, { max: 64 }) ||
            !isByteLength(domain, { max: 254 }))
    ) {
        return false;
    }

    if (user[0] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allow_utf8_local_part ?
            quotedEmailUserUtf8.test(user) :
            quotedEmailUser.test(user);
    }

    const pattern = options.allow_utf8_local_part ?
        emailUserUtf8Part : emailUserPart;

    const user_parts = user.split('.');
    for (let i = 0; i < user_parts.length; i++) {
        if (!pattern.test(user_parts[i])) {
            return false;
        }
    }
    return true;
}