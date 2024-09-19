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

        {/* アイテム位置一覧 */}
        <div css={[styles.baseContainer, styles.itemContainer]}>
          <div css={styles.baseFlex}>
            <p css={styles.baseText}>品目</p>
            {
              editFlag ?
              <input css={styles.baseText} type="text" /> :
              <p css={styles.baseText}>テントサウナ</p>
            }
          </div>
          <div css={styles.baseFlex}>
            <p css={styles.baseText}>カテゴリー</p>
            {
              editFlag ?
              <select name="category" css={styles.baseText}>
                <option value="0">0</option>
                <option value="1">1</option>
              </select> :
              <p css={styles.baseText}>0</p>
            }
          </div>
          <div css={styles.baseFlex}>
            <p css={styles.baseText}>値段</p>
            {
              editFlag ?
              <input css={styles.baseText} type="text" /> :
              <p css={styles.baseText}>18000</p>
            }
          </div>
          <div css={styles.baseFlex}>
            <p css={styles.baseText}>最高温度</p>
            {
              editFlag ?
              <input css={styles.baseText} type="text" /> :
              <p css={styles.baseText}>110</p>
            }
          </div>
          <div css={styles.baseFlex}>
            <p css={styles.baseText}>収容人数</p>
            {
              editFlag ?
              <select name="capacity" css={styles.baseText}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select> :
              <p css={styles.baseText}>4</p>
            }
          </div>
          <div css={styles.itemButtonContainer}>
            {
              editFlag ?
              <>
                <button
                  css={styles.button}
                  className={` ${dela_gothic.className}`}
                  onClick={() => setEditFlag(!editFlag)}
                >完了</button>
              </> :
              <>
                <button
                  css={styles.button}
                  className={` ${dela_gothic.className}`}
                  onClick={() => setEditFlag(!editFlag)}
                >編集</button>
                <button
                  css={[styles.button, styles.deleteButton]}
                  className={` ${dela_gothic.className}`}
                >削除</button>
              </>
            }
          </div>
        </div>

        {/* アイテム追加ボタン */}
        <div css={styles.addButtonContainer}>
          <button
            css={[styles.button, styles.addButton]}
            className={` ${dela_gothic.className}`}
            onClick={() => setAddFlag(!addFlag)}
          >追加</button>
        </div>

        {/* モーダル背景 */}
        <div
          css={addFlag ? styles.bg : [styles.bg, styles.bgAnime]}
          onClick={() => setAddFlag(!addFlag)}
        ></div>

        {/* アイテム追加のモーダル */}
        <div
          css={addFlag ? styles.addMdContainer : [styles.addMdContainer, styles.addMdAnime]}
        >
          <div css={styles.baseContainer}>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>品目</p>
              <input css={styles.baseText} type="text" />
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>カテゴリー</p>
              <select name="category" css={styles.baseText}>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>値段</p>
              <input css={styles.baseText} type="text" />
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>最高温度</p>
              <input css={styles.baseText} type="text" />
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>収容人数</p>
              <select name="capacity" css={styles.baseText}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div css={styles.addButtonContainer}>
              <button
                css={[styles.button, styles.addButton]}
                className={` ${dela_gothic.className}`}
                onClick={() => setAddFlag(!addFlag)}
              >完了</button>
            </div>
          </div>
        </div>
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

  baseContainer: css `
    width: ${vw(700)};
    background-color: #fff;
    padding: ${vw(100)} ${vw(60)};

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  baseFlex: css `
    width: 100%;
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: ${vw(40)};
    }

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  baseText: css `
    width: fit-content;

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  itemContainer: css `
    background-color: #9d9d9d;

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
    position: fixed;
    z-index: 110;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%,-50%);

    @media (min-width: ${PROJECT.BP}px) {
    }
  `,
  addMdAnime: css `
    display: none;
  `,
}
