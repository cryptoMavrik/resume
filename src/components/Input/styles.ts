import { motion } from "framer-motion"
import styled from "styled-components"

export const Container = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const InputField = styled.input`
    background: hsl(0 0% 0% / .1);
    color: #f3f3f3;
    border: 2px solid #a2a2a2;
    border-radius: 8px;
    width: 325px;
    padding: .5rem 1rem;
    margin: 1rem 0;
    font-weight: 500;
    min-height: 42px;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        appearance: none;
    }
    &:focus:not(:disabled):not(.error-input) {
        box-shadow: hsl(0 0% 100% / .2);
    }
    &.active + label,
    &:focus + label{
        font-size: 1rem;
        font-weight: 500;
        opacity: .9;
        color: #f3f3f3;
        top: -10%;
        left: 0rem;
    }
    
    &:active { 
        outline: none;
    }
`
export const Label = styled.label`
    z-index: 1;
    font-size: .9rem;
    font-weight: 300;
    pointer-events: none;
    position: absolute;
    color: #d3d3d3;
    top: 1.75rem;
    left: 1.2rem;
    opacity: .6;
    transition: all 200ms;
    
    @media screen and (max-width: 500px) {
        top: 2.25rem;
        font-size: 1rem;
    }
`

export const Error = styled.span`
    position: absolute;
    top: 90%;
    right: 1rem;
    margin-left: 1rem;
    font-size: .75rem;
    font-weight: 600;
    text-align: right;
    color: hsl(350 75% 50%);
`