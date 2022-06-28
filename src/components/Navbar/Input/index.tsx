import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import isEmail from '../../../utils/isEmail'
import { Container, Error, InputField, Label } from './styles'
import { InputProps } from './types'

const Input: React.FC<InputProps> = ({ label, setError, ...rest }): JSX.Element => {
    const [err, setErr] = useState<string>('')
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            inputRef.current && inputRef.current.classList.add("active")
        } else {
            inputRef.current && inputRef.current.classList.remove("active")
        }
        if (e.target.value.length === 0) {
            setErr(`${label} must not be empty`)
            setError(true)
        } else if (e.target.name === "reply_to" && !isEmail(e.target.value)) {
            setError(true)
            setErr(`Not a valid email address`)
        } else {
            setError(false)
            setErr("")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setError(true)
        if (isEmail(e.target.value)) {
            setError(false)
            setErr("")
            if (e.target.value.length === 0) {
                setErr(`${label} must not be empty`)
                setError(true)
            } else if (e.target.name === "reply_to" && !isEmail(e.target.value) && err) {
                setError(true)
                setErr(`${label} is not an address`)
            } else {
                setErr("")
            }
        }
    }

    return (
        <>
            <Container>
                <InputField
                    ref={inputRef}
                    onBlur={handleOnBlur}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    {...rest}
                />
                <Label>{label}</Label>
                {err && <Error>{err}</Error>}
            </Container>
        </>
    )
}

export default Input