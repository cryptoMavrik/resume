import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { FlexColumn } from "../../styles";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    align-items: center;
    padding: 5rem 20%;
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
`

export const ImageWrapper = styled.div`
    background: hsl(0 0% 100% / .1);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-basis: 60%;
    padding: 0 0 .5rem 0;
    overflow: hidden;
    border-bottom: 2px solid hsl(0 0% 100% / 1);
    width: 100%;
    height: 100%;
`

export const CardImage = styled.img<{ width?: string }>`
    width: ${({ width }) => width ? width : "100%"};
    margin: 1rem;
    position: relative;
`

export const CardHeader = styled.div`
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    padding: .5rem;
`;

export const CardBody = styled.div`
    font-size: 1rem;
    padding: 1rem .5rem;
    width: 100%;
`;

export const PortfolioCard = styled(FlexColumn)`
    background: hsl(0 0% 0% / .25);
    width: 15rem;
    height: 20rem;
    border: 2px solid hsl(180 50% 75% / 1);
    border-radius: 2rem;
    overflow: hidden;
`;