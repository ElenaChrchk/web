import styles from "./Card.module.css"
import {AsteroidContent} from "./asteroidContent/AsteroidContent.jsx";
import {AsteroidAction} from "./asteroidAction/AsteroidAction.jsx";
import {AsteroidImage} from "./asteroidImage/AsteroidImage.jsx";

export const AsteroidCard = () => {
    return <div className={styles.card}>

        <div className={styles.greenCard}>
            <AsteroidImage/>
            <AsteroidContent/>
            <AsteroidAction/>
        </div>

    </div>
}
export const DangerCard = () => {
    return <div className={styles.card}>

        <div className={styles.redCard}>
            <AsteroidImage/>
            <AsteroidContent/>
            <AsteroidAction/>
        </div>

    </div>
}