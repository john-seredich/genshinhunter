import { IActiveCard } from "../../shared/interface/activeCard.interface";
import styles from "./WeaponStatsCard.module.scss";

interface Props {
  setCardToggle: React.Dispatch<React.SetStateAction<boolean>>;
  activeCard: IActiveCard;
}

function StatsCard(props: Props) {
  const calculateStars = (rarity: number) => {
    return new Array(rarity).fill("⭐", 0, rarity);
  };

  return (
    <div
      className={`${styles.stats_card} ${
        styles[`rarity-${props.activeCard.rarity}`]
      }`}
      onClick={() => props.setCardToggle(false)}
    >
      <h2 className={styles.stats_card__name}>{props.activeCard.name}</h2>
      <div className={styles.stats_card__info}>
        <div className={styles.stats_card__base}>
          <p className={styles.stats_card__base_bold}>
            {props.activeCard.type}
          </p>
          <p className={styles.stats_card__base_light}>
            {props.activeCard.subStat}
          </p>
          <p className={styles.stats_card__base_bold}>N/A</p>
          <p className={styles.stats_card__base_light}>Base ATK</p>
          <h2>{props.activeCard.baseAttack}</h2>
          <p>{calculateStars(props.activeCard.rarity)}</p>
        </div>
        <img
          src={require(`../../assets/images/weapons/${props.activeCard.id}.png`)}
          alt={props.activeCard.name}
          loading="lazy"
        />
      </div>
      <div className={styles.stats_card__description}>
        <p>
          {props.activeCard.passiveName.length === 1
            ? "No Passive"
            : props.activeCard.passiveName}
        </p>
        <p>
          {props.activeCard.passiveDesc.length === 1
            ? "No Description"
            : "- " + props.activeCard.passiveDesc}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
