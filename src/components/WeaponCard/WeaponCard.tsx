import weaponImg from "../../assets/images/weapons/Weapon_Akuoumaru_Full_Icon.svg";
import styles from "./WeaponCard.module.scss";
import axios from "axios";
import { useQuery } from "react-query";

function WeaponCard(props: any) {
  const fetchWeaponData = () =>
    axios.get(`https://api.genshin.dev/weapons/${props.name}`);
  const { data } = useQuery(["weaponData", props.name], fetchWeaponData);
  const rarity = data?.data.rarity;

  return (
    <div className={`${styles.item} ${styles[`rarity-${rarity}`]}`}>
      <img src={weaponImg} alt="" />
      <p>Lv. 90</p>
    </div>
  );
}

export default WeaponCard;
