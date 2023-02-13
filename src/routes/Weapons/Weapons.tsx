import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import WeaponStatsCard from "../../components/WeaponStatsCard/WeaponStatsCard";
import WeaponCard from "../../components/WeaponCards/WeaponCard";
import Sort from "../../Layout/Sort/Sort";
import Header from "../../Layout/Header/Header";
import { IActiveCard } from "../../shared/interface/activeCard.interface";
import { staticItemData } from "../../staticItemData";
import styles from "./Weapons.module.scss";

interface IWeaponList {
  data: IActiveCard;
}

const fetchWeapons = async (sort: string) => {
  const weaponsList = await axios.get("https://api.genshin.dev/weapons");
  const weapons = await Promise.all(
    weaponsList?.data.map(async (weapon: string) => {
      const res = await axios.get(`https://api.genshin.dev/weapons/${weapon}`);
      return { name: weapon, data: res.data };
    })
  );

  return weapons
    .map(({ data, name }) => {
      return { data, name };
    })
    .sort(sortFn(sort));
};

const sortFn = (dir: string) =>
  dir === "asc"
    ? (a: IWeaponList, b: IWeaponList) => a.data.rarity - b.data.rarity
    : (a: IWeaponList, b: IWeaponList) => b.data.rarity - a.data.rarity;

function Weapons() {
  const [activeCard, setActiveCard] = useState<IActiveCard>(staticItemData);
  const [cardToggle, setCardToggle] = useState(false);
  const [sort, setSort] = useState("asc");
  const {
    data: weaponList,
    isLoading,
    error,
  } = useQuery([sort], () => fetchWeapons(sort));

  const weaponListElement = weaponList?.map((weapon) => {
    return (
      <WeaponCard
        key={weapon.name}
        weapon={weapon}
        setActiveCard={setActiveCard}
        activeCardName={activeCard.id}
        setCardToggle={setCardToggle}
      />
    );
  });

  return (
    <>
      <Header />
      <div className={styles.test_container}>
        {isLoading ? <h2 className={styles.loading}>Loading...</h2> : ""}
        {error instanceof Error ? (
          <h2 className={styles.error}>{error.message}</h2>
        ) : (
          ""
        )}
        <div className={styles.container}>{weaponListElement}</div>
        {cardToggle && (
          <WeaponStatsCard
            activeCard={activeCard}
            setCardToggle={setCardToggle}
          />
        )}
      </div>
      <Sort sort={sort} setSort={setSort} />
    </>
  );
}

export default Weapons;
