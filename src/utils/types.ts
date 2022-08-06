export type EmailOptionsType = {
    allow_display_name: boolean,
    require_display_name: boolean,
    allow_utf8_local_part: boolean,
    require_tld: boolean,
    blacklisted_chars: string,
    ignore_max_length: boolean,
    host_blacklist: []
}