import styles from "./AsteroidContent.module.css"
export const AsteroidContent = (props) =>{
    const {name, date, distance, size, lengthMode} = props;
    return <div>

        <div className={styles.contentName}>{name}</div>

        <div className={styles.contentWrapper}>
            <div className={styles.contentDate}>{`Дата: ${date}`}</div>

            <div className={styles.contentDistance}>
                {`Расстояние: ${lengthChoice(lengthMode, distance)}`}
            </div>

            <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
        </div>

    </div>
}

const lengthChoice = (lengthMode, distance) => {
    if (lengthMode)
        return `${distance} км`
    else
        return `${(distance/363104)} Лун`
}