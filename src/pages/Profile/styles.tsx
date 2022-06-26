import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { MENU_HEIGHT } from "../../components/Navbar/config";
import { FlexColumn, FlexRow } from "../../styles";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh + ${MENU_HEIGHT}); 
    margin-top: -5rem;
    padding: 0 9%;
    @media screen and (max-width: 1025px) {
        padding: 0 5%;
        margin-top: 0;
}
`

export const Wrapper = styled(FlexRow)`
    @media screen and (max-width: 1025px) {
        flex-direction: column;
        gap: 4rem;
        padding: 0 4rem;
    }
`

export const SkillBox = styled(FlexColumn)`
    background: hsl(0 0% 0% / .45);
    border: 4px solid hsl(185 80% 70% / 0.4);
    padding: 1rem .5rem;
    border-radius: 2rem;
    width: 100%;
`