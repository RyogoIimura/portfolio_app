"use client";
import { css } from "@emotion/react";
import Link from "next/link";

import { PROJECT } from '../data/AppData'
import { manrope, dela_gothic } from "../utils/Fonts";
import { vw, Responsive } from '../utils/Responsive';

const Header = () => {

  return (
    <>
      {/* bg */}
      <div
        css={styles.bg}
      ></div>

      {/* nav menu */}
      <div
        css={styles.navContainer}
      ></div>
    </>
  );
};
export default Header;

const styles = {
  bg: css `
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
    position: fixed;
    top: 0;
    left: 0;
  `,

  navContainer: css `
    width: ${vw(550)};
    height: 100vh;
    background-color: ${PROJECT.KEYCOLOR};
    position: fixed;
    top: 0;
    right: 0;

    @media (min-width: ${PROJECT.BP}px) {
    }
  `
}
