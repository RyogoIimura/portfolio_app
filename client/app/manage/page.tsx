"use client";
import { useState } from "react";
import { css } from "@emotion/react";
import useSWR from "swr";

import { PROJECT } from '../../data/AppData';
import { vw } from '../../utils/Responsive';
import { dela_gothic } from "../../utils/Fonts";
import { ItemType } from "@/types/types";


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export default function Manage() {
  const { data, isLoading, error } = useSWR(
    "http://localhost:8080/allItems",
    fetcher
  );
  const [editFlag, setEditFlag] = useState(false);
  const [addFlag, setAddFlag] = useState(false);

  return (
    <>
      <div css={styles.manageWrapper}>

        {/* アイテム一覧 */}
        {data?.map((item: ItemType) => (
          <div
            key={item.id}
            css={[styles.baseContainer, styles.itemContainer]}
          >
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
        ))}

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
              <input css={[styles.baseText, styles.inputText]} type="text" />
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>カテゴリー</p>
              <select name="category" css={[styles.baseText, styles.inputText]}>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>値段</p>
              <input css={[styles.baseText, styles.inputText]} type="text" />
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>最高温度</p>
              <input css={[styles.baseText, styles.inputText]} type="text" />
            </div>
            <div css={styles.baseFlex}>
              <p css={styles.baseText}>収容人数</p>
              <select name="capacity" css={[styles.baseText, styles.inputText]}>
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
    margin: ${vw(140)} auto 0;

    @media (min-width: ${PROJECT.BP}px) {
      margin: 120px auto 0;
    }
  `,

  baseContainer: css `
    width: ${vw(650)};
    background-color: #fff;
    padding: ${vw(80)} ${vw(50)};
    margin: 0 auto;

    @media (min-width: ${PROJECT.BP}px) {
      width: 600px;
      padding: 70px 40px 60px;
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
      &:not(:first-child) {
        margin-top: 40px;
      }
    }
  `,
  baseText: css `
    font-size: ${vw(24)};
    font-weight: 700;
    width: fit-content;

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 20px;
    }
  `,
  inputText: css `
    border: 2px solid ${PROJECT.BGCOLOR}
  `,
  itemContainer: css `
    background-color: ${PROJECT.BGCOLOR};
  `,

  itemButtonContainer: css `
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: ${vw(40)};

    @media (min-width: ${PROJECT.BP}px) {
      margin-top: 40px;
    }
  `,
  button: css `
    font-size: ${vw(30)};
    line-height: 1em;
    color: ${PROJECT.SUBCOLOR};
    border-bottom: 2px solid ${PROJECT.SUBCOLOR};

    @media (min-width: ${PROJECT.BP}px) {
      font-size: 30px;
    }
  `,
  deleteButton: css `
    margin-left: ${vw(30)};

    @media (min-width: ${PROJECT.BP}px) {
      margin-left: 30px;
    }
  `,
  addButtonContainer: css `
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${vw(60)};

    @media (min-width: ${PROJECT.BP}px) {
      margin-top: 60px;
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
    width: ${vw(650)};
    position: fixed;
    z-index: 110;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%,-50%);

    @media (min-width: ${PROJECT.BP}px) {
      width: 600px;
    }
  `,
  addMdAnime: css `
    display: none;
  `,
}
