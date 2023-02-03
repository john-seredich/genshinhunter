import { useQuery } from "react-query";
import axios from "axios";

const fetchItmes = async (url: string) => {
  const itemsList = await axios.get(`https://api.genshin.dev/${url}`);
  const items = await Promise.all(
    itemsList?.data.map(async (item: string) => {
      const res = await axios.get(`https://api.genshin.dev/${url}/${item}`);
      return { name: item, data: res.data };
    })
  );
  return items;
};

export function useGenshinData(url: string) {
  return useQuery([], () => fetchItmes(url), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
