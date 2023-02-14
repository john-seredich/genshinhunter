import styles from "./FoodStatsCard.module.scss";
import { IStaticFoodData } from "../../shared/interface/staticFoodData.interface";

interface Props {
  setCardToggle: React.Dispatch<React.SetStateAction<boolean>>;
  activeItem: IStaticFoodData;
}

function FoodStatsCard(props: Props) {
  const rarity = styles[`rarity-${props.activeItem.rarity}`];
  const calculateStars = (rarity: number) => {
    return new Array(rarity).fill("⭐", 0, rarity);
  };

  return (
    <div
      className={`${styles.info_card} ${rarity} `}
      onClick={() => props.setCardToggle(false)}
    >
      <h2 className={styles.info_card__name}>{props.activeItem.name}</h2>
      <div className={styles.info_card__images}>
        <p>{calculateStars(props.activeItem.rarity)}</p>
        <img
          src={require(`../../assets/paimon-images/Food/Item_Adeptus'_Temptation.webp`)}
          alt=""
          loading="lazy"
        />
      </div>
      <div className={styles.info_card__description}>
        <p>
          {props.activeItem.effect
            ? "• " + props.activeItem.effect
            : "No Passive"}
        </p>
        <p>
          {props.activeItem.description
            ? "- " + props.activeItem.description
            : "No Description"}
        </p>
      </div>
    </div>
  );
}

export default FoodStatsCard;
