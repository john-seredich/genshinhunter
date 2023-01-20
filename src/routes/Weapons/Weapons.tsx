import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import StatsCard from "../../components/StatsCard/StatsCard";
import WeaponCard from "../../components/WeaponCard/WeaponCard";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import { IActiveCard } from "../../shared/interface/activeCard.interface";
import { staticItemData } from "../../staticItemData";
import styles from "./Weapons.module.scss";

const fetchWeapons = async () => {
  const weaponsList = await axios.get("https://api.genshin.dev/weapons");
  const weapons = await Promise.all(
    weaponsList?.data.map(async (weapon: string) => {
      const res = await axios.get(`https://api.genshin.dev/weapons/${weapon}`);
      return { name: weapon, data: res.data };
    })
  );
  return weapons;
};

function Weapons() {
  const [activeCard, setActiveCard] = useState<IActiveCard>(staticItemData);
  const [cardToggle, setCardToggle] = useState(true);
  const { data: weaponList } = useQuery(["weaponsTest"], fetchWeapons);

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
        <div className={styles.container}>{weaponListElement}</div>
        {cardToggle && (
          <StatsCard activeCard={activeCard} setCardToggle={setCardToggle} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Weapons;
