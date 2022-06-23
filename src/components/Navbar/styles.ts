import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { SpaceProps } from "styled-system";
import { FlexColumn } from "../../styles";
import { MENU_HEIGHT } from "./config";
import { NavItemsProps } from "./types";

export const Wrapper = styled(FlexColumn)`
    position: relative;
`

export const StyledNavBar = styled(FlexColumn)`
    z-index: 100;
    height: ${MENU_HEIGHT};
    margin-bottom: -${MENU_HEIGHT};
    justify-content: space-between;
    padding: 1rem 0;
`

export const NavItem = styled(Link) <SpaceProps & { $isActive?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2.25rem;
    color: ${({ $isActive }) => $isActive ? "#90ddf9" : "white"};
    font-size: 1.2rem;
    transition: color 200ms;
`