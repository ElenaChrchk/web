import styles from "./Card.module.css"
import {AsteroidContent} from "./asteroidContent/AsteroidContent.jsx";
import {AsteroidAction} from "./asteroidAction/AsteroidAction.jsx";
import {AsteroidImage} from "./asteroidImage/AsteroidImage.jsx";

export const AsteroidCard = (props) => {
    const {name, date, distance, size, isDangerous, lengthMode} = props;
    return <div className={styles.card}>

        <div className={isDangerous ? styles.redCard : styles.greenCard}>
            <AsteroidImage/>
            <AsteroidContent name={name} date={date} distance={distance} size={size} lengthMode={lengthMode}/>
            <AsteroidAction isDangerous={isDangerous}/>
        </div>

    </div>
}
