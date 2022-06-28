import { ChangeEvent, useState } from "react";
import { ContactFormType, FormReturnType } from "./types";

export const useForm = (): FormReturnType => {
    const [values, setValues] = useState<ContactFormType>({});

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (!value) return;
        setValues({
            ...values,
            [name]: value,
        });
    };
    return { values, onChange };
};
