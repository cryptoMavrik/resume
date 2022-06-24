import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { FlexColumn } from "../../styles";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 10%;
`

export const SkillBox = styled(FlexColumn)`
    background: hsl(0 0% 0% / .2);
    border: 2px inset hsl(180 50% 75% / 1);
    padding: 1rem .5rem;
    border-radius: 2rem;
    width: 100%;
`