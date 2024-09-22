import { API_URL } from "../constants/url";
import useSWR from "swr";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useItems = () => {
  // useState の代わり
  const { data, isLoading, error, mutate } = useSWR(
    `${API_URL}/allItems`,
    fetcher
  );
  // console.log(data);

  return {
    items: data,
    isLoading,
    error,
    mutate,
  };
};
