"use client";
import { manrope } from "../utils/Fonts";
import { css } from "@emotion/react";

import { PROJECT } from '../data/AppData'
import Link from "next/link";

const Header = () => {

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
            css={styles.headerText}
            href="">▶︎ ご予約はこちらから</Link>
          <h2
            className={` ${manrope.className}`}
            css={styles.headerText}
          >AZUMA GORGE SAUNA</h2>
          <div>
          <Link
            className={` ${manrope.className}`}
            css={styles.headerText}
            href=""
          >Sign In</Link>
            <div
              css={styles.hamburger}
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
  headerContainer: css`
    width: 100%;
    height: 100px;
    background-color: ${PROJECT.KEYCOLOR};
    position: fixed;
    top: 0;
    left: 0;

    @media (min-width: ${PROJECT.BP}px) {
      height: 100px;
    }
  `,
  headerContContainer: css`
    width: 100%;
    height: 100%;
    position: relative;

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  headerText: css `
    font-size: 10px;
    font-weight: 800;
    color: #fff;

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  hamburger: css`
    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  hamburgerLine: css `
    @media (min-width: ${PROJECT.BP}px) {
    }
  `,

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
    @media (min-width: ${PROJECT.BP}px) {
    }
  `
}
