import axios from "axios";
import { useQuery } from "react-query";
import { IActiveCard } from "../../shared/interface/activeCard.interface";
import styles from "./WeaponCard.module.scss";

interface Props {
  name: string;
  activeCardName: string;
  setActiveCard: React.Dispatch<React.SetStateAction<IActiveCard>>;
}

function WeaponCard(props: Props) {
  const fetchWeaponData = () =>
    axios.get(`https://api.genshin.dev/weapons/${props.name}`);
  const { data } = useQuery(["weaponData", props.name], fetchWeaponData);

  const weaponInfo = {
    name: data?.data.name,
    rarity: data?.data.rarity,
    type: data?.data.type,
    baseAttack: data?.data.baseAttack,
    subStat: data?.data.subStat,
    passiveName: data?.data.passiveName,
    passiveDesc: data?.data.passiveDesc,
    id: props.name,
  };

  const clickHandler = () => {
    props.setActiveCard(weaponInfo);
  };

  return (
    <div
      className={`${styles.item} ${styles[`rarity-${weaponInfo.rarity}`]} ${
        props.activeCardName === props.name ? styles.active : ""
      }`}
      onClick={clickHandler}
    >
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
