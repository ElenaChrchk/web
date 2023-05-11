import styles from "./Card.module.css";
import { AsteroidAction } from "./asteroidAction/AsteroidAction";
import { AsteroidImage } from "./asteroidImage/AsteroidImage.jsx";
import { useContext } from "react";
import {AsteroidsContext} from "../asteroids-context/AsteroidsContext";
import {AsteroidContentContainer} from "./asteroidContent/AsteroidContentContainer";



type CardProps = {
  name: string;
  date: string;
  distance: {
    kilometers: number;
    lunar: number;
  };
  size: number;
  isDangerous: boolean;
};

export const AsteroidCard = (props: CardProps) => {
  const { isDangerous, size, distance, name, date } = props;
  const {addAsteroid} = useContext(AsteroidsContext)
  const {deleteAsteroid} = useContext(AsteroidsContext)

  return (
    <div className={styles.card}>
      <div className={isDangerous ? styles.redCard : styles.greenCard}>
        <AsteroidImage />
        <AsteroidContentContainer
          name={name}
          date={date}
          distance={distance}
          size={size}
        />
        <AsteroidAction isDangerous={isDangerous} onClick={()=>addAsteroid(props)}/>
      </div>
    </div>
  );
};
