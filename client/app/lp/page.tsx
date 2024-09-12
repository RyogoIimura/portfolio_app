"use client";
import { manrope } from "../utils/fonts";
import { css } from "@emotion/react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Lp() {
  return (
    <>
      <Header />
      {/* <p
        className={`${manrope.className}`}
        style={{ fontWeight: 400 }}
        css={text}
      >Manrope</p>
      <p
        className={` ${manrope.className}`}
        style={{ fontWeight: 600 }}
      >Manrope</p>
      <p
        className={`${manrope.className}`}
        style={{ fontWeight: 800 }}
      >Manrope</p>
      <p>あいうえお</p>
      <p style={{ fontWeight: 700 }}>あいうえお</p> */}
      <Footer />
    </>
  );
}

const text = css ({
  color: `red`,
})
