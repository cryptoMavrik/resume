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
    background: hsl(0 0% 0% / .9);
    border: 1px solid hsl(180 50% 75% / 1);
    padding: 2rem;
    border-radius: 2rem;
`