"use client";
import { css } from "@emotion/react";
import useSWR from "swr";

import { PROJECT } from '../../data/AppData';
import { vw } from '../../utils/Responsive';
import { ItemType } from "@/types/types";
import EditForm from '../../components/manage/EditForm'
import CreateForm from '../../components/manage/CreateForm'


async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export default function Manage() {
  const { data, isLoading, error } = useSWR(
    "http://localhost:8080/allItems",
    fetcher
  );

  return (
    <>
      <div css={styles.manageWrapper}>

        {/* アイテム一覧 */}
        {data?.map((item: ItemType) => (
          <EditForm
            items={data}
            item={item}
          />
        ))}

        {/* アイテム追加 */}
        <CreateForm items={data} />
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
}
