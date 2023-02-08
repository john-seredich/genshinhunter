import styles from "./WeaponCard.module.scss";
import { IActiveCard } from "../../shared/interface/activeCard.interface";

interface Props {
  weapon: any;
  activeCardName: string;
  setActiveCard: React.Dispatch<React.SetStateAction<IActiveCard>>;
  setCardToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function WeaponCard(props: Props) {
  const activeCardStyles =
    props.activeCardName === props.weapon.name ? styles.active : "";
  const rarityStyles = styles[`rarity-${props.weapon.data.rarity}`];

  const clickHandler = () => {
    props.setActiveCard({ ...props.weapon.data, id: props.weapon.name });
    props.setCardToggle(true);
  };

  return (
    <div
      className={`${styles.item} ${rarityStyles}  ${activeCardStyles} `}
      onClick={clickHandler}
    >
      <img
        src={require(`../../assets/paimon-images/weapons/${props.weapon.name}.png`)}
        alt=""
        loading="lazy"
      />
      <p>Lv. 90</p>
    </div>
  );
}

export default WeaponCard;
