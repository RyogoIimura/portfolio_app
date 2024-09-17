"use client";
import { css } from "@emotion/react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { PROJECT } from '../data/AppData'
import { manrope, dela_gothic } from "../utils/Fonts";
import { vw, Responsive } from '../utils/Responsive';
import { Easing } from '../utils/Easing';

const PageLinks = () => {
  const linksName = ['AAA', 'BBB', 'CCC', 'DDD'];

  return (
    <>
      {linksName.map((value, index) => (
        <div
          key={index}
          className={` ${dela_gothic.className}`}
          css={styles.reserveLink}
        >
          <span
            css={styles.reserveLinkDot}
          >・&nbsp;</span>
          {linksName[index]}
        </div>
      ))}
    </>
  )
};
export default PageLinks;

const styles = {
  reserveLink: css `
    font-size: 9px;
    font-weight: 800;
    color: #fff;
    margin: auto 0;
    text-decoration: none;
    cursor: pointer;

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 16px;
    }
  `,
  reserveLinkDot: css `
    font-size: 9px;
    font-weight: 800;
    color: ${PROJECT.SUBCOLOR};
    margin: auto 0;
    text-decoration: none;

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 16px;
    }
  `,
}
