import {Header} from "../components/header/Header";
import {AsteroidCard} from "../components/card/Card";
import styles from "../pages/Asteroids.module.css";
import {useState} from "react";


export const Asteroids = ()=>{

    const [asteroids] = useState(generateAsteroids());

    const [onlyDangerous, setOnlyDangerous] = useState(false)
    const [lengthMode, setLengthMode] = useState(true)

    return <div>
        <div>
            <Header/>
        </div>

        <div className={styles.container}>
            <label className="checkbox" value={onlyDangerous}>
                <input type="checkbox" id="danger" onChange={()=>setOnlyDangerous(!onlyDangerous)}/>
                <span className={styles.text}>показать только опасные</span>
            </label>

            <div className={styles.distance}>
                <label className={styles.text}>Расстояние:</label>
                <button className={styles.length} onClick={()=>setLengthMode(true)}>в километрах </button>
                <button className={styles.length} onClick={()=>setLengthMode(false)}> в дистанциях до луны</button>
            </div>
        </div>


        <div className={styles.asteroids}>
            {onlyDangerous ?
                asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard {...item} lengthMode={lengthMode}/>) :
                asteroids.map((item)=><AsteroidCard {...item} lengthMode={lengthMode}/>)
            }
        </div>


    </div>
}

const generateAsteroids = ()=>{
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result =[];

    for (let i=0; i<10; i++) {
        const name = characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+characters[(Math.random()*25).toFixed(0)]+'-'+characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)]
        const date = `${(Math.random()*27+1).toFixed(0)} ${months[(Math.random()*11).toFixed(0)]} 2023`
        const size = (Math.random()*1000+10).toFixed(0)
        const distance = (Math.random()*90000000).toFixed(0)
        const isDangerous = Math.random() >= 0.5;
        result.push({name,date,size,distance,isDangerous})
    }
    return result
}