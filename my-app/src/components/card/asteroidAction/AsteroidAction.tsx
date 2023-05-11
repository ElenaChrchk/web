import styles from "./AsteroidAction.module.css";

// eslint-disable-next-line react/prop-types
export const AsteroidAction = ({ isDangerous }) => {
  return (
    <div>
      <div className={styles.actionGrade}>{`Оценка: ${
        isDangerous ? "опасен" : "не опасен"
      }`}</div>

      <button className={styles.destroy_btn}>Уничтожить</button>
    </div>
  );
};
