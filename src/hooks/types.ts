import { ChangeEvent } from "react";

export type ContactFormType = {
    from_name?: string;
    reply_to?: string;
    message?: string;
}

export type FormReturnType = {
    values: ContactFormType;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}