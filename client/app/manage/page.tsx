"use client";
import { useState } from "react";
import { css } from "@emotion/react";

import { PROJECT } from '../../data/AppData';
import { vw } from '../../utils/Responsive';
import { dela_gothic } from "../../utils/Fonts";

export default function Complete() {
  const [editFlag, setEditFlag] = useState(false);
  const [addFlag, setAddFlag] = useState(false);

  return (
    <>
      <div css={styles.manageWrapper}>
        <div css={styles.itemContainer}>
          <div css={styles.item}>
            <p css={styles.itemText}>品目</p>
            {
              editFlag ?
              <input type="text" /> :
              <p css={styles.itemText}>テントサウナ</p>
            }
          </div>
          <div css={styles.item}>
            <p css={styles.itemText}>カテゴリー</p>
            {
              editFlag ?
              <input type="text" /> :
              <p css={styles.itemText}>0</p>
            }
          </div>
          <div css={styles.item}>
            <p css={styles.itemText}>値段</p>
            {
              editFlag ?
              <input type="text" /> :
              <p css={styles.itemText}>18000</p>
            }
          </div>
          <div css={styles.item}>
            <p css={styles.itemText}>最高温度</p>
            {
              editFlag ?
              <input type="text" /> :
              <p css={styles.itemText}>110</p>
            }
          </div>
          <div css={styles.item}>
            <p css={styles.itemText}>収容人数</p>
            {
              editFlag ?
              <input type="text" /> :
              <p css={styles.itemText}>4</p>
            }
          </div>
          <div css={styles.itemButtonContainer}>
            <button
              css={styles.button}
              className={` ${dela_gothic.className}`}
              onClick={() => setEditFlag(!editFlag)}
            >編集</button>
            <button
              css={[styles.button, styles.deleteButton]}
              className={` ${dela_gothic.className}`}
            >削除</button>
          </div>
        </div>

        <div css={styles.addButtonContainer}>
          <button
            css={[styles.button, styles.addButton]}
            className={` ${dela_gothic.className}`}
          >追加</button>
        </div>

        <div
          css={addFlag ? styles.bg : [styles.bg, styles.bgAnime]}
          onClick={() => setAddFlag(!false)}
        ></div>
        <div
          css={addFlag ? styles.addMdContainer : [styles.addMdContainer, styles.addMdAnime]}
        ></div>
      </div>
    </>
  );
}

const styles = {
  manageWrapper: css `
    width: ${vw(700)};
    margin: ${vw(230)} auto 0;

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  itemContainer: css `
    background-color: #9d9d9d;
    padding: ${vw(100)} ${vw(60)};

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  item: css `
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  itemText: css `
    width: fit-content;

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,

  itemButtonContainer: css `
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: ${vw(60)};

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  button: css `
    font-size: ${vw(34)};
    color: ${PROJECT.SUBCOLOR};
    border-bottom: 2px solid ${PROJECT.SUBCOLOR};

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  deleteButton: css `
    margin-left: ${vw(40)};

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  addButtonContainer: css `
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${vw(60)};

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  addButton: css `
    color: ${PROJECT.KEYCOLOR};
    border-bottom: 2px solid ${PROJECT.KEYCOLOR};
  `,

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
  addMdContainer: css `
    width: ${vw(550)};
    background-color: ${PROJECT.KEYCOLOR};
    padding: 0 0 ${vw(400)} ${vw(60)};
    overflow-y: scroll;
    position: fixed;
    z-index: 110;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%)

    @media (min-width: ${PROJECT.BP}px) {
      width: 400px;
      padding: 0 0 270px 30px;
    }
  `,
  addMdAnime: css `
    display: none;
  `,
}
