import styles from "./Food.module.scss";
import Header from "../../Layout/Header/Header";
import { useGenshinData } from "../../hooks/useGenshinData";
import { useState } from "react";
import { staticFoodData } from "../../staticItemData";
import { IStaticFoodData } from "../../test/staticFoodData.interface";
import InfoCard from "../../test/InfoCard/InfoCard";
import ItemCards from "../../test/ItemCards/ItemCards";

interface IApiData {
  name: string;
  data: IStaticFoodData;
}

function Food() {
  const [activeItem, setActiveItem] = useState<IStaticFoodData>(staticFoodData);
  const [cardToggle, setCardToggle] = useState(false);
  const { data } = useGenshinData("consumables");

  const consumables = data?.map((consumObj: IApiData) => {
    return Object.entries(consumObj.data);
  });

  const foods = consumables?.[0].map((food: [string, IStaticFoodData]) => {
    return (
      <ItemCards
        key={food[0]}
        items={food}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
        setCardToggle={setCardToggle}
      />
    );
  });

  const potions = consumables?.[1].map((potion) => {
    return (
      <ItemCards
        key={potion[0]}
        items={potion}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
        setCardToggle={setCardToggle}
      />
    );
  });

  return (
    <>
      <Header />
      <div className={styles.test_container}>
        <div className={styles.container}>
          {foods}
          {potions}
        </div>
        {cardToggle && (
          <InfoCard activeItem={activeItem} setCardToggle={setCardToggle} />
        )}
      </div>
    </>
  );
}

export default Food;
