import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import { SpaceProps } from "styled-system";
import { FlexColumn } from "../../styles";
import { MENU_HEIGHT } from "./config";
import { NavItemsProps } from "./types";

export const Wrapper = styled(FlexColumn)`
  position: relative;
  background: hsl(0 0% 0% / .45);
  overflow: hidden;
  `;

export const StyledNavBar = styled(FlexColumn)`
  background: hsl(0 0% 0% / .75);
  z-index: 100;
  height: ${MENU_HEIGHT};
  justify-content: space-between;
  padding: 1rem 0;

  @supports (-webkit-backdrop-filter: blur(3rem)) or (backdrop-filter: blur(3rem))  {
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    background: hsl(0 0% 0% / .1);
  }
`;

export const NavItem = styled(Link) <SpaceProps & { $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2.25rem;
  color: ${({ $isActive }) => ($isActive ? "#90ddf9" : "#d9d9d9")};
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 500ms;
`;
