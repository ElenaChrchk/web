import styles from "./AsteroidContent.module.css";

type AsteroidContentProps = {
  name: string;
  date: string;
  distance: {
    kilometers: number;
    lunar: number;
  };
  size: number;
  lengthMode: boolean;
};

export const AsteroidContent = (props: AsteroidContentProps) => {
  const { name, date, distance, size, lengthMode } = props;

  return (
    <div>
      <div className={styles.contentName}>{name}</div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentDate}>{`Дата: ${date}`}</div>

        <div className={styles.contentDistance}>
          {`Расстояние: ${lengthChoice(lengthMode, distance)}`}
        </div>

        <div className={styles.contentSize}>{`Размер: ${size} м`}</div>
      </div>
    </div>
  );
};

const lengthChoice = (lengthMode, distance) => {
  if (lengthMode) return `${distance.kilometers} км`;
  else return `${distance.lunar} Лун`;
};
