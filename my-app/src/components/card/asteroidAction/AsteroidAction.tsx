import styles from "./AsteroidAction.module.css";

export const AsteroidAction = (props: {
  isDangerous: boolean,
  onClick: (asteroids: any) => void
}) => {
  const { isDangerous, onClick } = props;

  return (
    <div>
      <div className={styles.actionGrade}>
        {`Оценка: ${isDangerous ? "опасен" : "не опасен"}`}
      </div>

      <button className={styles.destroy_btn} onClick={onClick}>Уничтожить</button>
    </div>
  );
};
