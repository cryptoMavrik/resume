import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type ContactFormType = {
    from_name?: string;
    reply_to?: string;
    message?: string;
}

export type FormReturnType = {
    values: ContactFormType;
    setValues: Dispatch<SetStateAction<ContactFormType>>
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}