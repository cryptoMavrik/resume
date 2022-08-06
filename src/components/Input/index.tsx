import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import isEmail from '../../utils/isEmail'
import { Container, Error, InputField, Label } from './styles'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({ label, value, ...rest }): JSX.Element => {
    const { error, setError } = useForm()
    const inputRef = useRef<HTMLInputElement | null>(null)

    const config: { [name: string]: string } = {
        "from_name": "Name",
        "reply_to": "Email address"
    }

    const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            inputRef.current && inputRef.current.classList.add("active")
        } else {
            inputRef.current && inputRef.current.classList.remove("active")
        }
        if (e.target.value.length === 0) {
            setError(`${config[e.target.name]} must not be empty`)
        } else if (e.target.name === "reply_to" && !isEmail(e.target.value)) {
            setError(`Not a valid email address`)
        } else {
            setError("")
        }
    }

    return (
        <>
            <Container>
                <InputField
                    ref={inputRef}
                    defaultValue={value}
                    onBlur={handleOnBlur}
                    {...rest}
                />
                <Label>{label}</Label>
                {error && <Error>{error}</Error>}
            </Container>
        </>
    )
}

export default Input