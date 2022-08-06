import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { MENU_HEIGHT } from "../../components/Navbar/config";
import { FlexColumn } from "../../styles";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh + ${MENU_HEIGHT}); 
    align-items: center;
    padding: 5rem 20%;
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    @media screen and (max-width: 1025px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }
    @media screen and (max-width: 769px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    @media screen and (max-width: 426px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    @media screen and (max-width: 376px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }
    
    `

export const ImageWrapper = styled.div`
    background: linear-gradient(180deg, hsl(210 50% 75% / .15) 66%, hsl(0 0% 50% / .05));
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-basis: 60%;
    padding: 0 0 .5rem 0;
    overflow: hidden;
    border-bottom: 2px solid hsl(0 0% 100% / .5);
    width: 100%;
    height: 100%;
    `

export const CardImage = styled.img<{ width?: string }>`
    width: ${({ width }) => width ? width : "100%"};
    margin: auto;
    position: relative;
    transform: scale(1);
    transition: transform 500ms;
    &:hover {
        transform: scale(1.2);
    }
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
    /* border: 2px solid hsl(180 50% 75% / 1); */
    /* border: 2px solid hsl(185 80% 70% / 0.4); */
    border-radius: 2rem;
    overflow: hidden;
    `;