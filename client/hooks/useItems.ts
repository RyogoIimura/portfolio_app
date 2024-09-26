import useSWR from "swr";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useItems = () => {
  const { data, isLoading, error, mutate } = useSWR(
    `http://localhost:8080/allItems`,
    fetcher
  );

  return {
    items: data,
    isLoading,
    error,
    mutate,
  };
};
