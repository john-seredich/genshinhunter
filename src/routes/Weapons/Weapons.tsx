import axios from "axios";
import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import StatsCard from "../../components/StatsCard/StatsCard";
import TestCard from "../../components/WeaponCard/TestCard";
import WeaponCard from "../../components/WeaponCard/WeaponCard";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import { IActiveCard } from "../../shared/interface/activeCard.interface";
import { staticItemData } from "../../staticItemData";
import styles from "./Weapons.module.scss";

const fetchWeaponsList = () => axios.get("https://api.genshin.dev/weapons");

const fetchWeapons = async () => {
  const weaponsList = await axios.get("https://api.genshin.dev/weapons");
  const weapons = await Promise.all(
    weaponsList?.data.map((weapon: string) => {
      return axios.get(`https://api.genshin.dev/weapons/${weapon}`);
    })
  );
  return weapons;
};

function Weapons() {
  const [activeCard, setActiveCard] = useState<IActiveCard>(staticItemData);
  const [cardToggle, setCardToggle] = useState(true);
  const { data: weaponList } = useQuery(["weaponList"], fetchWeaponsList);
  const { data } = useQuery(["weaponsTest"], fetchWeapons);

  // const weaponCardElement = () => {
  //   const weaponData = data
  //     ?.map((obj) => {
  //       return obj.data;
  //     })
  //     .map((weapon) => {
  //       return (
  //         <WeaponCard
  //           key={weapon.name}
  //           name={weapon}
  //           setActiveCard={setActiveCard}
  //           activeCardName={activeCard.id}
  //           setCardToggle={setCardToggle}
  //         />
  //       );
  //     });
  //   return weaponData;
  // };

  console.log(data?.[0].data);

  return (
    <>
      <Header />
      <div className={styles.test_container}>
        <div className={styles.container}>
          {data
            ?.map((obj) => {
              return obj.data;
            })
            .map((weapon, i: number) => {
              return <TestCard key={i} weapon={weapon} />;
            })}

          {/* {weaponList?.data.map((item: string) => {
            return (
              <WeaponCard
                key={item}
                name={item}
                setActiveCard={setActiveCard}
                activeCardName={activeCard.id}
                setCardToggle={setCardToggle}
              />
            );
          })} */}
        </div>
        {cardToggle && (
          <StatsCard activeCard={activeCard} setCardToggle={setCardToggle} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Weapons;
