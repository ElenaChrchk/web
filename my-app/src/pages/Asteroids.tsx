import { Header } from "../components/header/Header";
import { AsteroidCard } from "../components/card/Card";
import styles from "../pages/Asteroids.module.css";
import { useEffect, useState } from "react";

export const Asteroids = () => {
  const [asteroids, setAsteroids] = useState<
    {
      name: string;
      date: string;
      distance: {
        kilometers: number;
        lunar: number;
      };
      size: number;
      isDangerous: boolean;
      id: string;
    }[]
  >([]);

  const [onlyDangerous, setOnlyDangerous] = useState(false);
  const [lengthMode, setLengthMode] = useState(true);

  useEffect(() => {
    const result = fetch(
      "https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY"
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        let rawAsteroids = [];
        for (const data in response.near_earth_objects) {
          rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data]);
        }

        const asteroids = rawAsteroids.map((item) => {
          const size = Math.trunc(
            (item.estimated_diameter.meters.estimated_diameter_max +
              item.estimated_diameter.meters.estimated_diameter_min) /
              2
          );
          const close = item.close_approach_data[0];

          return {
            name: item.name,
            date: close.close_approach_date,
            size,
            distance: {
              kilometers: close.miss_distance.kilometers,
              lunar: close.miss_distance.lunar,
            },
            isDangerous: item.is_potentially_hazardous_asteroid,
            id: item.id,
          };
        });
        setAsteroids(asteroids);
      });
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className={styles.container}>
        <label className="checkbox">
          <input
            type="checkbox"
            value={onlyDangerous as unknown as string}
            onChange={() => setOnlyDangerous(!onlyDangerous)}
          />
          <span className={styles.text}>показать только опасные</span>
        </label>

        <div className={styles.distance}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={styles.text}>Расстояние:</label>
          <button className={styles.length} onClick={() => setLengthMode(true)}>
            в километрах
          </button>
          <button
            className={styles.length}
            onClick={() => setLengthMode(false)}
          >
            {" "}
            в дистанциях до луны
          </button>
        </div>
      </div>

      <div className={styles.asteroids}>
        {onlyDangerous ?
            asteroids.filter((item) => item.isDangerous)
                // eslint-disable-next-line react/jsx-key
              .map((item) => <AsteroidCard {...item} lengthMode={lengthMode} />)
          : asteroids.map((item) => (
                // eslint-disable-next-line react/jsx-key
              <AsteroidCard {...item} lengthMode={lengthMode} />
            ))}
      </div>
    </div>
  );
};

const generateAsteroids = () => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const result = [];

  for (let i = 0; i < 10; i++) {
    const name =
      characters[(Math.random() * 25).toFixed(0)] +
      characters[(Math.random() * 25).toFixed(0)] +
      characters[(Math.random() * 25).toFixed(0)] +
      characters[(Math.random() * 25).toFixed(0)] +
      "-" +
      characters[(Math.random() * 25).toFixed(0)] +
      characters[(Math.random() * 25).toFixed(0)];
    const date = `${(Math.random() * 27 + 1).toFixed(0)} ${
      months[(Math.random() * 11).toFixed(0)]
    } 2023`;
    const size = (Math.random() * 1000 + 10).toFixed(0);
    const distance = (Math.random() * 90000000).toFixed(0);
    const isDangerous = Math.random() >= 0.5;
    result.push({ name, date, size, distance, isDangerous, id: name });
  }
  return result;
};
