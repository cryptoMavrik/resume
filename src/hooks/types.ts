import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from "react";

export type ContactFormType = {
    [name: string]: string;
}

export type FormReturnType = {
    values: ContactFormType;
    setValues: Dispatch<SetStateAction<ContactFormType>>
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    setError: Dispatch<SetStateAction<string>>
}