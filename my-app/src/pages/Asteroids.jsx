import {Header} from "../components/header/Header";
import {AsteroidCard,DangerCard} from "../components/card/Card";
import styles from "../pages/Asteroids.module.css";
import {Link} from "react-router-dom";


export const Asteroids = ()=>{
    const asteroids = [{name: "I", isDangerous: true},{name: "II", isDangerous: false}];
    return <div>
        <div>
            <Header/>
        </div>

        <div className={styles.container}>
            <label className="checkbox">
                <input type="checkbox" id="danger"/>
                <span className={styles.text}>показать только опасные</span>
            </label>

            <div className={styles.distance}>
                <label className={styles.text}>Расстояние:</label>
                <Link className={styles.length}>в километрах </Link>
                <Link className={styles.length}> в дистанциях до луны</Link>
            </div>
        </div>


        <div className={styles.asteroids}>
            <AsteroidCard/>
            <DangerCard/>
        </div>


    </div>
}