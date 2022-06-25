import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { MENU_HEIGHT } from "../../components/Navbar/config";
import { FlexColumn } from "../../styles";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh + ${MENU_HEIGHT}); 
    margin-top: -5rem;
    padding: 0 9%;
`

export const EmailForm = styled(FlexColumn)`
    background: hsl(0 0% 0% / .45);
    border: 2px solid hsl(180 50% 75% / 1);
    padding: 2rem 4rem;
    border-radius: 2rem;
    width: 100%;
    @media screen and (max-width: 425px) {
        width: 95%;
        padding: 2rem;
    }
`

export const Input = styled(motion.input)`
    background: hsl(0 0% 0% / .1);
    color: #f3f3f3;
    border: 2px solid #a2a2a2;
    border-radius: 8px;
    width: 325px;
    padding: .5rem 1rem;
    margin: 1rem 0;
`

export const TextArea = styled(motion.textarea)`
    background: hsl(0 0% 0% / .25);
    color: #f3f3f3;
    border: 2px solid #a2a2a2;
    border-radius: 8px;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
`

export const SubmitButton = styled(motion.input)`
    background: #40c0d0cc;
    color: #fefefe;
    border-radius: 8px;
    font-weight: 700;
    width: 300px;
    padding: 1rem;
    margin: 1rem 0;
`