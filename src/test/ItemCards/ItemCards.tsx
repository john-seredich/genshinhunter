import styles from "./ItemCards.module.scss";
import { IStaticFoodData } from "../staticFoodData.interface";

interface Props {
  items: [string, IStaticFoodData];
  activeItem: IStaticFoodData;
  setActiveItem: React.Dispatch<React.SetStateAction<IStaticFoodData>>;
  setCardToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemCards({ items, activeItem, setActiveItem, setCardToggle }: Props) {
  const activeCardStyles =
    activeItem.name === items[1].name ? styles.active : "";
  const rarityStyles = styles[`rarity-${items[1].rarity}`];

  const clickHandler = () => {
    setActiveItem({ ...items[1] });
    setCardToggle(true);
  };

  return (
    <div
      className={`${styles.item} ${rarityStyles} ${activeCardStyles}`}
      onClick={clickHandler}
    >
      <div className={styles.item__img}>
        <img
          src={require(`../../assets/paimon-images/Food/Item_Adeptus'_Temptation.webp`)}
          alt=""
          loading="lazy"
        />
      </div>
      <p>1</p>
    </div>
  );
}

export default ItemCards;
