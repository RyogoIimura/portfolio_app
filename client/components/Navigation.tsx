"use client";
import { css } from "@emotion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { PROJECT } from '../data/AppData'
import { manrope, dela_gothic } from "../utils/Fonts";
import { vw, Responsive } from '../utils/Responsive';
import { Easing } from '../utils/Easing';
import PageLinks from './PageLinks';

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
            css={[styles.hamburgerLine, styles.hamburgerLine1]}
          ></div>
          <div
            css={[styles.hamburgerLine, styles.hamburgerLine2]}
          ></div>
        </div>
        <h2
          className={` ${manrope.className}`}
          css={styles.navTitle}
        >AZUMA GORGE SAUNA</h2>
        <Link
          css={styles.reserveLink}
          href=""
        >▶︎　ご予約はこちらから</Link>
        <div>
          <PageLinks />
        </div>
        <Link
          className={` ${dela_gothic.className}`}
          css={[styles.signIn, Responsive.sp]}
          href=""
        >SIGN IN</Link>
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
    padding: 0 0 ${vw(400)} ${vw(60)};
    position: fixed;
    z-index: 110;
    top: 0;
    right: 0;

    opacity: 1;
    transition: transform .6s ${Easing.outExpo}, opacity .4s ${Easing.outExpo};

    @media (min-width: ${PROJECT.BP}px) {
      width: 400px;
      padding: 0 0 270px 30px;
    }
  `,
  navAnime: css `
    opacity: 0;
    transform: translateX(100%)
  `,

  hamburger: css`
    width: 50px;
    height: 50px;
    margin-left: auto;
    position: relative;
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
    position: absolute;
    top: 50%;
    left: 50%;

    @media (min-width: ${PROJECT.BP}px) {
      height: 2px;
    },
  `,
  hamburgerLine1: css `
    transform: translate(-50%, -50%) rotate(-45deg);
  `,
  hamburgerLine2: css `
    transform: translate(-50%, -50%) rotate(45deg);
  `,
  navTitle: css `
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .05em;
    color: #fff;
    margin-top: -32px;

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 18px;
      margin-top: -48px;
    }
  `,
  reserveLink: css `
    font-size: ${vw(28)};
    font-weight: 800;
    color: #fff;
    display:inline-block;
    margin-top: ${vw(200)};
    text-decoration: none;

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 18px;
      margin-top: 110px;
    }
  `,
  signIn: css `
    font-size: ${vw(38)};
    font-weight: 800;
    letter-spacing: .1em;
    color: #fff;
    display: inline-block;
    margin-top: ${vw(190)};
    text-decoration: none;
    border-bottom: 2px solid #fff;
  `,
}
