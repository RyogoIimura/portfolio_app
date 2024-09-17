"use client";
import { css } from "@emotion/react";
import Link from "next/link";
import { useState } from "react";

import { PROJECT } from '../data/AppData'
import { manrope, dela_gothic } from "../utils/Fonts";
import { Responsive } from '../utils/Responsive';
import Navigation from './Navigation';

const Header = () => {
  const [navFlag, setNavFlag] = useState<boolean>(false);
  const navOpen = () => setNavFlag(!navFlag);

  return (
    <>
      {/* header */}
      <div
        css={styles.headerContainer}
      >
        <div
          css={styles.headerContContainer}
        >
          <Link
            css={styles.reserveLink}
            href="">▶︎　ご予約はこちらから</Link>
          <h2
            className={` ${manrope.className}`}
            css={[styles.headerTitle, Responsive.pc]}
          >AZUMA GORGE SAUNA</h2>
          <div
            css={styles.hamburgerContainer}
          >
            <h2
              className={` ${manrope.className}`}
              css={[styles.headerTitle, Responsive.sp]}
            >AZUMA GORGE SAUNA</h2>
            <Link
              className={` ${dela_gothic.className}`}
              css={[styles.signIn, Responsive.pc]}
              href=""
            >SIGN IN</Link>
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
        </div>
      </div>

      {/* bg, nav menu */}
      <Navigation
        navFlag={navFlag}
        navOpen={navOpen}
      />
    </>
  );
};
export default Header;

const styles = {
  headerContainer: css`
    width: 100%;
    height: 50px;
    background-color: ${PROJECT.KEYCOLOR};
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;

    @media (min-width: ${PROJECT.BP}px) {
      height: 70px;
    }
  `,
  headerContContainer: css`
    width: 100%;
    height: 100%;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (min-width: ${PROJECT.BP}px) {
      padding-left: 30px;
    }
  `,
  reserveLink: css `
    font-size: 9px;
    font-weight: 800;
    color: #fff;
    margin: auto 0;
    text-decoration: none;

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 16px;
    }
  `,

  hamburgerContainer: css `
    width: fit-content;
    height: 100%;
    display: flex;
  `,
  headerTitle: css `
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .05em;
    color: #fff;
    margin: auto 10px auto 0;

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 18px;
      margin: auto 0;
    }
  `,
  signIn: css `
    @media (min-width: ${PROJECT.BP}px) {
      font-size: 20px;
      color: #fff;
      letter-spacing: .02em;
      margin: auto 30px auto 0;
    }
  `,
  hamburger: css`
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    @media (min-width: ${PROJECT.BP}px) {
      width: 70px;
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
