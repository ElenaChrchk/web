import {createContext, FC, ReactNode, useState} from "react";

export const AsteroidsContext = createContext(null);

type AsteroidsContextProviderProps = {
    children?: ReactNode;
};

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({
                                                                                children,
                                                                            }) => {
    const [asteroids, setAsteroids] = useState([])
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [lengthMode, setLengthMode] = useState(true);
    const [destroyment, setDestroyment] = useState([]);
    const [cracozabra, setCracozabra] = useState([]);

    const addAsteroid = (asteroids) => {
        setDestroyment([
            ...destroyment.filter((item) => item.id !== asteroids.id),
            asteroids,
        ]);
    };
    const deleteAsteroid = (asteroids) => {
        setCracozabra([
            ...cracozabra.filter((item) => item.id !== asteroids.id),
        ]);
    };

    return (
        <AsteroidsContext.Provider
            value={{
                asteroids,
                setAsteroids,
                onlyDangerous,
                setOnlyDangerous,
                lengthMode,
                setLengthMode,
                destroyment,
                addAsteroid,
                deleteAsteroid,
                cracozabra,
                setCracozabra

            }}
        >
            {children}
        </AsteroidsContext.Provider>
    );
};
