import styles from "./AsteroidAction.module.css";


export const AsteroidAction = () =>{
    return <div>

            <div className={styles.actionGrade}>Оценка: не опасен</div>

            <button className={styles.destroy_btn}>Уничтожить</button>
    </div>
}