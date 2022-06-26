import { motion } from "framer-motion";
import styled, { createGlobalStyle, keyframes } from "styled-components/macro";
import { flexbox, FlexboxProps, space, SpaceProps } from "styled-system";

export const bubbleAnimation = keyframes`
    0% {
          transform: translateY(0px) translateX(0px);
        }
    33.33% {
          transform: translateY(-20px) translateX(-5px);
        }
    50% {
          transform: translateY(-30px) translateX(-10px);
        }
    66.67% {
          transform: translateY(-15px) translateX(-5px);
        }
    100% {
          transform: translateY(0px) translateX(5px);
        }
`

export const FlexColumn = styled(motion.div) <
  SpaceProps & FlexboxProps & { width?: string; height?: string }
  >`
  display: flex;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "auto")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${space}
  ${flexbox}
`;

export const FlexRow = styled(motion.div) <
  SpaceProps & FlexboxProps & { height?: string }
  >`
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? height : "auto")};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${space}
  ${flexbox}
`;

export const Heading = styled(motion.h2) <
  { scale?: "sm" | "md" | "lg"; color?: string; opacity?: string } & SpaceProps
  >`
  color: ${({ color }) => (color ? color : "#f3f3f3")};
  font-size: ${({ scale }) =>
    scale === "sm" ? "1.3rem" : scale === "lg" ? "3.5rem" : "2.5rem"};
  font-weight: ${({ scale }) =>
    scale === "sm" ? "500" : scale === "lg" ? "900" : "700"};
  text-align: left;
  opacity: ${({ opacity }) => (opacity ? opacity : "1")};

  @supports (background-clip: text) or (-webkit-background-clip: text) {
    background: linear-gradient(117deg, #53d3f3, #90ddc9);
    color: ${({ color }) => (color ? color : "transparent")};
    background-clip: text;
    -webkit-background-clip: text;
  }

  ${space}
`;

export const Text = styled(motion.p) <
  { scale?: "sm" | "md" | "lg" } & SpaceProps
  >`
  color: #dfdfdf;
  font-size: ${({ scale }) =>
    scale === "sm" ? ".85rem" : scale === "lg" ? "1.25rem" : "1.1rem"};
  font-weight: 500;
  transition: opacity 250ms ease;

  &:hover:not(:active) {
    opacity: 0.75;
  }

  ${space}
`;

export const Bubble1 = styled.div<{ top?: string; left?: string }>`
  position: absolute;
  z-index: -2;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    hsl(220 80% 55% / 0.4),
    hsl(220 50% 55% / 0.01) 70%,
    transparent 100%
  );
  height: 30rem;
  width: 30rem;
  top: ${({ top }) => (top ? top : "0")};
  left: ${({ left }) => (left ? left : "0")};
  animation-name: ${bubbleAnimation};
  animation-iteration-count: infinite;
  animation-duration: 7500ms;
  animation-delay: 0;
`;

export const Bubble2 = styled.div<{ top?: string; left?: string }>`
  position: absolute;
  z-index: -3;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    hsl(230 80% 65% / 0.4),
    hsl(230 50% 65% / 0.01) 70%,
    transparent 100%
  );
  height: 45rem;
  width: 45rem;
  top: ${({ top }) => (top ? top : "0")};
  left: ${({ left }) => (left ? left : "0")};
  animation-name: ${bubbleAnimation};
  animation-iteration-count: infinite;
  animation-duration: 7500ms;
  animation-delay: 2000ms;
`;

export const Bubble3 = styled.div<{ top?: string; left?: string }>`
  position: absolute;
  z-index: -4;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    hsl(245 80% 65% / 0.4),
    hsl(240 50% 55% / 0.01) 70%,
    transparent 100%
  );
  /* background: radial-gradient(circle, hsl(220 50% 50% / .15), hsl(220 40% 50% / .01) 50%, #050710); */
  height: 60rem;
  width: 60rem;
  top: ${({ top }) => (top ? top : "0")};
  left: ${({ left }) => (left ? left : "0")};
  animation-name: ${bubbleAnimation};
  animation-iteration-count: infinite;
  animation-duration: 7500ms;
  animation-delay: 3500ms;
`;

const GlobalStyle = createGlobalStyle`
  
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
    background: #050710;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    font-size: 16px;

    @media screen and (max-width: 500px) {
      font-size: 12px;
    }
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, input,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, button,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  button a {
    text-decoration: none;
  }
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [role="button"] {
    cursor: pointer;
  }

  *:focus {
    outline: 0;
  }

  input[type=range] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type=range]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }  

  input,
  button {
    border: none;
    outline: none;
  } 
`;

export default GlobalStyle;
