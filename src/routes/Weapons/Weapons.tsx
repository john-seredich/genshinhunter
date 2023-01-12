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

const fetchWeaponsList = () => axios.get("https://api.genshin.dev/weapons");

function Weapons() {
  const [activeCard, setActiveCard] = useState<IActiveCard>(staticItemData);
  const { data } = useQuery(["weaponList"], fetchWeaponsList);

  return (
    <>
      <Header />
      <div className={styles.test_container}>
        <div className={styles.container}>
          {data?.data.map((item: string, i: number) => {
            return (
              <WeaponCard
                key={i}
                name={item}
                setActiveCard={setActiveCard}
                activeCardName={activeCard.id}
              />
            );
          })}
        </div>
        <StatsCard {...activeCard} />
      </div>
      <Footer />
    </>
  );
}

export default Weapons;
