import {Link} from "react-router-dom";
import styles from "./Header.module.css"

export const Header = ()=>{
    return <div className={styles.container}>

        <h1 className={styles.title}>ARMAGGEDON V</h1>
        <div className={styles.description}>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>

        <div className={styles.routeContainer}>
            <Link to={"/asteroids"} className={styles.Asteroids_ref}>Астероиды </Link>
            <Link to={"/destroyment"} className={styles.Destroy_ref}>Уничтожение </Link>
        </div>

        <div className={styles.line}></div>

    </div>
}
