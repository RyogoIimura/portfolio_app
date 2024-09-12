"use client";
import { manrope } from "../utils/Fonts";
import { css } from "@emotion/react";

import { PROJECT } from '../data/AppData'

const Header = () => {

  return (
    <>
      {/* header */}
      <div
        css={styles.box}
      >
        <div>
          <p>Header</p>
          <div></div>
        </div>
      </div>

      {/* nav menu */}
      <div></div>

      {/* hamburger */}
      <button>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </>
  );
};
export default Header;

const styles = {
  box: css`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 0, 0, 0.5);

    @media (max-width: ${PROJECT.BP}px) {
      background-color: rgb(0, 0, 255, 0.5);
    }
  `
}
