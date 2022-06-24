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

export const SkillBox = styled(FlexColumn)`
    background: hsl(0 0% 0% / .45);
    border: 2px solid hsl(180 50% 75% / 1);
    padding: 1rem .5rem;
    border-radius: 2rem;
    width: 100%;
`