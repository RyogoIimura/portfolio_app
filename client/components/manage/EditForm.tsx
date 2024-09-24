"use client";
import { useState } from "react";
import { css } from "@emotion/react";

import { PROJECT } from '../../data/AppData';
import { vw } from '../../utils/Responsive';
import { dela_gothic } from "../../utils/Fonts";
import { ItemType } from "@/types/types";
import { mutate } from "swr";

type propsType = {
  items: ItemType[];
  item: ItemType;
}

const EditForm = (props: propsType) => {
  const { items, item } = props;

  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState(undefined);
  const [itemPrice, setItemPrice] = useState('');
  const [itemTemperature, setItemTemperature] = useState('');
  const [itemCapacity, setItemCapacity] = useState(undefined);

  const [editFlag, setEditFlag] = useState(false);
  const [editItemId, setEditItemId] = useState("");
  const editItem = () => {
    setItemName(item.name)
    setItemCategory(item.category)
    setItemPrice(item.price)
    setItemTemperature(item.maximum_temperature)
    setItemCapacity(item.capacity)

    setEditFlag(!editFlag)
    setEditItemId(item.id)
  }

  const handleSubmit = async () => {
    console.log('submit')

    if (editFlag) {
      const response = await fetch(`http://localhost:8080/editItem/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: itemName,
          category: itemCategory,
          price: itemPrice,
          capacity: itemCapacity,
          maximum_temperature: itemTemperature,
        }),
      });

      // if (response.ok) {
      //   const editedItem = await response.json();
      //   const updatedItems = items.map((item: ItemType) =>
      //     item.id === editedItem.id ? editedItem : item
      //   );
      //   mutate(updatedItems);
      // }
    }

    setEditFlag(!editFlag)
  };

  const handleDelete = async (id: string) => {
    const response = await fetch(`http://localhost:8080/deleteItem/${item.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    // if (response.ok) {
    //   const deletedItem = await response.json();
    //   const updatedItems = items.filter((item: ItemType) => item.id !== id);
    //   mutate(updatedItems);
    // }
  };

  return (
    <>
      <form
        key={item.id}
        css={[styles.baseContainer, styles.itemContainer]}
      >
        <div css={styles.baseFlex}>
          <p css={styles.baseText}>品目</p>
          {
            editFlag && editItemId === item.id ?
            <input css={styles.baseText} type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} /> :
            <p css={styles.baseText}>{item.name}</p>
          }
        </div>
        <div css={styles.baseFlex}>
          <p css={styles.baseText}>カテゴリー</p>
          {
            editFlag && editItemId === item.id ?
            <select name="category" css={styles.baseText} value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
              <option value="0">0</option>
              <option value="1">1</option>
            </select> :
            <p css={styles.baseText}>{item.category}</p>
          }
        </div>
        <div css={styles.baseFlex}>
          <p css={styles.baseText}>値段</p>
          {
            editFlag && editItemId === item.id ?
            <input css={styles.baseText} type="text" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} /> :
            <p css={styles.baseText}>{item.price}</p>
          }
        </div>
        <div css={styles.baseFlex}>
          <p css={styles.baseText}>最高温度</p>
          {
            editFlag && editItemId === item.id ?
            <input css={styles.baseText} type="text" value={itemTemperature} onChange={(e) => setItemTemperature(e.target.value)} /> :
            <p css={styles.baseText}>{item.maximum_temperature}</p>
          }
        </div>
        <div css={styles.baseFlex}>
          <p css={styles.baseText}>収容人数</p>
          {
            editFlag && editItemId === item.id ?
            <select name="capacity" css={styles.baseText} value={itemCapacity} onChange={(e) => setItemCapacity(e.target.value)}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select> :
            <p css={styles.baseText}>{item.capacity}</p>
          }
        </div>
        <div css={styles.itemButtonContainer}>
          {
            editFlag && editItemId === item.id ?
            <>
              <button
                type="button"
                css={styles.button}
                className={` ${dela_gothic.className}`}
                onClick={() => handleSubmit()}
              >保存</button>
            </> :
            <>
              <button
                type="button"
                css={styles.button}
                className={` ${dela_gothic.className}`}
                onClick={() => editItem()}
              >編集</button>
              <button
                type="button"
                css={[styles.button, styles.rightButton]}
                className={` ${dela_gothic.className}`}
                onClick={handleDelete}
              >削除</button>
            </>
          }
        </div>
      </form>
    </>
  );
};
export default EditForm;

const styles = {
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
  itemContainer: css `
    background-color: ${PROJECT.BGCOLOR};

    &:not(:first-child) {
      margin-top: ${vw(40)};
    }

    @media (min-width: ${PROJECT.BP}px) {
      &:not(:first-child) {
        margin-top: 40px;
      }
    }
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
  rightButton: css `
    margin-left: ${vw(30)};

    @media (min-width: ${PROJECT.BP}px) {
      margin-left: 30px;
    }
  `,
}
