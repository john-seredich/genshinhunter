import { IActiveCard } from "../../shared/interface/activeCard.interface";
import styles from "./StatsCard.module.scss";

function StatsCard(props: IActiveCard) {
  return (
    <div className={styles.stats_card}>
      <h2 className={styles.stats_card__name}>{props.name}</h2>
      <div className={styles.stats_card__info}>
        <div className={styles.stats_card__base}>
          <p className={styles.stats_card__base_bold}>{props.type}</p>
          <p className={styles.stats_card__base_light}>{props.subStat}</p>
          <p className={styles.stats_card__base_bold}>N/A</p>
          <p className={styles.stats_card__base_light}>Base ATK</p>
          <h2>{props.baseAttack}</h2>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <img
          src={require(`../../assets/paimon-images/weapons/${props.id}.png`)}
          alt=""
          loading="lazy"
        />
      </div>
      <div className={styles.stats_card__description}>
        <p>{props.passiveName}</p>
        <p>- {props.passiveDesc}</p>
      </div>
    </div>
  );
}

export default StatsCard;
