"use client";
import { css } from "@emotion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { PROJECT } from '../data/AppData'
import { manrope, dela_gothic } from "../utils/Fonts";
import { vw, Responsive } from '../utils/Responsive';
import { Easing } from '../utils/Easing';

type NavigationProps = {
  navFlag: boolean;
  navOpen: () => void;
};

const Navigation = (props: NavigationProps) => {
  const { navFlag, navOpen } = props;
  console.log(navFlag);

  return (
    <>
      <div
        css={navFlag ? styles.bg : [styles.bg, styles.bgAnime]}
        onClick={navOpen}
      ></div>

      <div
        css={navFlag ? styles.navContainer : [styles.navContainer, styles.navAnime]}
      >
        <div
          css={styles.hamburger}
          onClick={navOpen}
        >
          <div
            css={styles.hamburgerLine}
          ></div>
          <div
            css={styles.hamburgerLine}
          ></div>
          <div
            css={styles.hamburgerLine}
          ></div>
        </div>
      </div>
    </>
  );
};
export default Navigation;

const styles = {
  bg: css `
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
    position: fixed;
    z-index: 105;
    top: 0;
    left: 0;
  `,
  bgAnime: css `
    display: none;
  `,

  navContainer: css `
    width: ${vw(550)};
    height: 100vh;
    background-color: ${PROJECT.KEYCOLOR};
    position: fixed;
    z-index: 110;
    top: 0;
    right: 0;
    transition: transform .5s ${Easing.outCubic};

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  navAnime: css `
    transform: translateX(100%)
  `,

  hamburger: css`
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    cursor: pointer;

    @media (min-width: ${PROJECT.BP}px) {
      width: 70px;
      height: 70px;
    }
  `,
  hamburgerLine: css `
    width: 43%;
    height: 1px;
    background-color: #fff;
    margin: 2px auto;

    @media (min-width: ${PROJECT.BP}px) {
      height: 2px;
      margin: 4px auto;
    }
  `
}
