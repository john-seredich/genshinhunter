import styles from "./ItemCards.module.scss";
// import { IActiveCard } from "../../shared/interface/activeCard.interface";
import { IStaticFoodData } from "../staticFoodData.interface";

interface Props {
  // items: any;
  // setActiveCard: React.Dispatch<React.SetStateAction<IStaticFoodData>>;
  // setCardToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemCards(props: any) {
  const tempNames = props.items[0];
  const activeCardStyles =
    props.activeCardName === props.items[0] ? styles.active : "";
  const rarityStyles = styles[`rarity-${props.items[1].rarity}`];

  const clickHandler = () => {
    props.setActiveItem({ ...props.items[1], id: props.items[0] });
    props.setCardToggle(true);
  };

  return (
    <div className={`${styles.item} ${rarityStyles}`} onClick={clickHandler}>
      <div className={styles.item__img}></div>
      {/* <img
        src={require(`../../assets/paimon-images/weapons/${props.weapon.name}.png`)}
        alt=""
        loading="lazy"
      /> */}
      <p>1</p>
    </div>
  );
}

export default ItemCards;
