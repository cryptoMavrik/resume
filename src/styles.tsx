import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components/macro'
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';

export const FlexColumn = styled(motion.div) <SpaceProps & FlexboxProps & { width?: string, height?: string }>`
  display: flex;
  width: ${({ width }) => width ? width : "100%"};
  height: ${({ height }) => height ? height : "auto"};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${space}
  ${flexbox}
`

export const FlexRow = styled(motion.div) <SpaceProps & FlexboxProps & { height?: string }>`
  display: flex;
  width: 100%;
  height: ${({ height }) => height ? height : "auto"};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${space}
  ${flexbox}
`

export const Heading = styled(motion.h2) <{ scale?: "sm" | "md" | "lg", color?: string, opacity?: string } & SpaceProps>`
  color: ${({ color }) => color ? color : "#f3f3f3"};
  font-size: ${({ scale }) => scale === "sm" ? "1.5rem" : scale === "lg" ? "3.5rem" : "2.25rem"};
  font-weight: ${({ scale }) => scale === "sm" ? "500" : scale === "lg" ? "700" : "600"};
  text-align: left;
  opacity: ${({ opacity }) => opacity ? opacity : "1"};

  @supports (background-clip: text) or (-webkit-background-clip: text) {
    background: linear-gradient(117deg, #53d3f3, #90ddc9);
    color: ${({ color }) => color ? color : "transparent"};
    background-clip: text;
    -webkit-background-clip: text;
  }

  ${space}
`

export const Text = styled(motion.p) <{ scale?: "sm" | "md" } & SpaceProps>`
  color: #f3f3f3;
  font-size: ${({ scale }) => scale === "sm" ? "1.1rem" : "1.25rem"};
  font-weight: 400;
  transition: opacity 250ms ease;

  &:hover:not(:active) {
    opacity: .75;
    color: #fff;
  }

  ${space}
`

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
    /* background: hsl(0 0% 5% / .1); */
    color: white !important;
    /* background: white; */
    background: #020305;
  }

  :root {
    font-size: 16px;

    @media screen and (max-width: 425px) {
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

export default GlobalStyle