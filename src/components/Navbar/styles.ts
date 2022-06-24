import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { SpaceProps } from "styled-system";
import { FlexColumn } from "../../styles";
import { MENU_HEIGHT } from "./config";
import { NavItemsProps } from "./types";

export const Wrapper = styled(FlexColumn)`
  position: relative;
  background: hsl(0 0% 0% / .5);
  overflow: hidden;
  `;

export const StyledNavBar = styled(FlexColumn)`
  position: relative;
  z-index: 100;
  height: ${MENU_HEIGHT};
  margin-bottom: -${MENU_HEIGHT};
  justify-content: space-between;
  padding: 1rem 0;
`;

export const NavItem = styled(Link) <SpaceProps & { $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2.25rem;
  color: ${({ $isActive }) => ($isActive ? "#90ddf9" : "#d9d9d9")};
  font-size: 1.2rem;
  transition: color 500ms;
`;
