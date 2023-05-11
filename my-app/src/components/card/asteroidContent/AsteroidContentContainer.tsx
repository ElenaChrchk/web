import {useContext} from "react";
import {AsteroidsContext} from "../../asteroids-context/AsteroidsContext";
import {AsteroidContent} from "./AsteroidContent";

export const AsteroidContentContainer = (props)=>{

    const { lengthMode } = useContext(AsteroidsContext);

    return <AsteroidContent {...props} lengthMode={lengthMode} />
}