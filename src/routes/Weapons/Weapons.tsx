import styles from "./Weapons.module.scss";
import Header from "../../Layout/Header/Header";
import axios from "axios";
import { useQuery } from "react-query";
import WeaponCard from "../../components/WeaponCard/WeaponCard";
import StatsCard from "../../components/StatsCard/StatsCard";

const array1: any[] = new Array(134).fill("filled", 0, 134);

const fetchWeaponsList = () => axios.get("https://api.genshin.dev/weapons");

function Weapons() {
  const { data } = useQuery(["weaponList"], fetchWeaponsList);

  return (
    <>
      <Header />
      <div className={styles.test_container}>
        <div className={styles.container}>
          {data?.data.map((item: any, i: number) => {
            return <WeaponCard key={i} name={item} />;
          })}
        </div>
        <StatsCard />
      </div>
    </>
  );
}

export default Weapons;

// <div className={styles.item} key={i}>
//   <img src={weaponImg2} alt="" />
//   <p>Lv. 90</p>
// </div>
