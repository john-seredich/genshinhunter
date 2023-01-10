import styles from "./StatsCard.module.scss";
import testImg from "../../assets/paimon-images/weapons/wolf-s-gravestone.png";

function StatsCard() {
  return (
    <div className={styles.stats_card}>
      <h2 className={styles.stats_card__name}>Wolf's Gravestone</h2>
      <div className={styles.stats_card__info}>
        <div className={styles.stats_card__base}>
          <p className={styles.stats_card__base_bold}>Claymore</p>
          <p className={styles.stats_card__base_light}>ATK</p>
          <p className={styles.stats_card__base_bold}>10.8%</p>
          <p className={styles.stats_card__base_light}>Base ATK</p>
          <h2>46</h2>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <img src={testImg} alt="" />
      </div>
      <div className={styles.stats_card__description}>
        <p>Wolfish Tracker</p>
        <p>
          - Increases Base ATK by <span>20/25/30/35/40%</span>. On hit, attacks
          against enemies with less than 30% HP increase all party members' Base
          ATK by
          <span> 40/50/60/70/80%</span> for 12s. Can only occur once every 30s.
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
