import styles from "./Food.module.scss";
import Header from "../../Layout/Header/Header";
import { useGenshinData } from "../../hooks/useGenshinData";
import { useState } from "react";
import { staticFoodData } from "../../staticItemData";
import { IStaticFoodData } from "../../test/staticFoodData.interface";
import InfoCard from "../../components/FoodStatsCard/FoodStatsCard";
import FoodCards from "../../components/FoodCards/FoodCards";
import Footer from "../../Layout/Footer/Footer";

interface IApiData {
  name: string;
  data: IStaticFoodData;
}

function Food() {
  const [activeItem, setActiveItem] = useState<IStaticFoodData>(staticFoodData);
  const [cardToggle, setCardToggle] = useState(false);
  const { data, isLoading, error } = useGenshinData("consumables");

  const consumables = data?.map((consumObj: IApiData) => {
    return Object.entries(consumObj.data);
  });

  const foods = consumables?.[0].map((food: [string, IStaticFoodData]) => {
    return (
      <FoodCards
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
      <FoodCards
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
          {isLoading ? <h2 className={styles.loading}>Loading...</h2> : ""}
          {error instanceof Error ? (
            <h2 className={styles.error}>{error.message}</h2>
          ) : (
            ""
          )}
          {foods}
          {potions}
        </div>
        {cardToggle && (
          <InfoCard activeItem={activeItem} setCardToggle={setCardToggle} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default Food;
