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
      <img
        src={require(`../../assets/paimon-images/weapons/${props.name}.png`)}
        alt=""
        loading="lazy"
      />
      <p>Lv. 90</p>
    </div>
  );
}

export default WeaponCard;
