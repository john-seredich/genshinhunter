// import { IActiveCard } from "../../shared/interface/activeCard.interface";
import styles from "./InfoCard.module.scss";

// interface Props {
//   setCardToggle: React.Dispatch<React.SetStateAction<boolean>>;
//   activeCard: IActiveCard;
// }

function InfoCard(props: any) {
  console.log(props);

  const calculateStars = (rarity: number) => {
    return new Array(rarity).fill("⭐", 0, rarity);
  };

  return (
    <div
      className={`${styles.stats_card}  ${
        styles[`rarity-${props.activeItem.rarity}`]
      } `}
      onClick={() => props.setCardToggle(false)}
    >
      <h2 className={styles.stats_card__name}>{props.activeItem.name}</h2>
      <div className={styles.stats_card__info}>
        <div className={styles.stats_card__base}>
          <p className={styles.stats_card__base_bold}>
            {/* {props.activeCard.type} */}
          </p>
          <p>{calculateStars(props.activeItem.rarity)}</p>
        </div>
        {/* <img
          src={require(`../../assets/paimon-images/weapons/${props.activeCard.id}.png`)}
          alt={props.activeCard.name}
          loading="lazy"
        /> */}
      </div>
      <div className={styles.stats_card__description}>
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

export default InfoCard;

// // import { IActiveCard } from "../../shared/interface/activeCard.interface";
// import styles from "./InfoCard.module.scss";

// // interface Props {
// //   setCardToggle: React.Dispatch<React.SetStateAction<boolean>>;
// //   activeCard: IActiveCard;
// // }

// function InfoCard(props: any) {
//   // const calculateStars = (rarity: number) => {
//   //   return new Array(rarity).fill("⭐", 0, rarity);
//   // };

//   return (
//     <div
//       className={`${styles.stats_card} ${
//         styles[`rarity-${props.activeCard.rarity}`]
//       }`}
//       onClick={() => props.setCardToggle(false)}
//     >
//       <h2 className={styles.stats_card__name}>{props.activeCard.name}</h2>
//       <div className={styles.stats_card__info}>
//         <div className={styles.stats_card__base}>
//           <p className={styles.stats_card__base_bold}>
//             {props.activeCard.type}
//           </p>
//           {/* <p>{calculateStars(props.activeCard.rarity)}</p> */}
//         </div>
//         <img
//           src={require(`../../assets/paimon-images/weapons/${props.activeCard.id}.png`)}
//           alt={props.activeCard.name}
//           loading="lazy"
//         />
//       </div>
//       <div className={styles.stats_card__description}>
//         <p>
//           {props.activeCard.passiveName.length === 1
//             ? "No Passive"
//             : props.activeCard.passiveName}
//         </p>
//         <p>
//           {props.activeCard.passiveDesc.length === 1
//             ? "No Description"
//             : "- " + props.activeCard.passiveDesc}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default InfoCard;
