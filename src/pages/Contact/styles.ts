import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { space, SpaceProps } from "styled-system";
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
    border: 2px solid hsl(175 80% 65% / 0.4);
    padding: 2rem 4rem;
    border-radius: 2rem;
    width: 100%;
    @media screen and (max-width: 425px) {
        width: 95%;
        padding: 2rem;
    }
`

// export const Input = styled(motion.input)`
//     background: hsl(0 0% 0% / .1);
//     color: #f3f3f3;
//     border: 2px solid #a2a2a2;
//     border-radius: 8px;
//     width: 325px;
//     padding: .5rem 1rem;
//     margin: 1rem 0;

//     &:active {
//         background: hsl(0 0% 0% / .1);
//     }
// `

export const TextArea = styled(motion.textarea) <SpaceProps>`
    background: hsl(0 0% 0% / .25);
    font-family: "Roboto";
    color: #f3f3f3;
    border: 2px solid #a2a2a299;
    border-radius: 8px;
    width: 100%;
    min-height: 10rem;
    padding: 1rem;
    margin: 1rem 0;

    &:active, :focus { 
        outline: none;
        border: 2px solid #a2a2a2;
    }

    ${space}
`

export const SubmitButton = styled(motion.button)`
    cursor: pointer;
    background: hsl(175 80% 50% / 0.75);
    color: #fefefe;
    border-radius: 8px;
    font-weight: 700;
    width: 300px;
    padding: 1rem;
    opacity: 1;
    margin: 1rem 0;
    
    &:disabled {
        opacity: 0;
        color: #919191;
        background: transparent;
        border: 2px solid hsl(175 00% 50% / 0.45);
        cursor: not-allowed;
    }
`