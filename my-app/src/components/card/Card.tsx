import styles from "./Card.module.css"
import {AsteroidContent} from "./asteroidContent/AsteroidContent";
import {AsteroidAction} from "./asteroidAction/AsteroidAction";
import {AsteroidImage} from "./asteroidImage/AsteroidImage.jsx";

type CardProps = {
    name: string;
    date: string;
    distance:{
        kilometers: number;
        lunar: number;
    },
    size: number;
    isDangerous: boolean;
    lengthMode: boolean
}

export const AsteroidCard = (props: CardProps) => {
    const {isDangerous,size, distance, lengthMode, name, date} = props;
    return <div className={styles.card}>

        <div className={isDangerous ? styles.redCard : styles.greenCard}>
            <AsteroidImage/>
            <AsteroidContent name={name} date={date} distance={distance} size={size} lengthMode={lengthMode}/>
            <AsteroidAction isDangerous={isDangerous}/>
        </div>

    </div>
}
