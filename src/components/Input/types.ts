import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    setError: React.Dispatch<React.SetStateAction<boolean>>
}