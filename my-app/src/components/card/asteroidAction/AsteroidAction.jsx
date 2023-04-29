import styles from "./AsteroidAction.module.css";


export const AsteroidAction = ({isDangerous}) =>{

    return <div>

            <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? 'опасен' : 'не опасен'}`}</div>

            <button className={styles.destroy_btn}>Уничтожить</button>
    </div>
}