import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import PlanetView from "./PlanetView";
import Spinner from '../spiner';
import ErrorIndicator from "../error-indicator/error-indicator";

import './random-planet.css';
const swapi = new SwapiService();

const RandomPlanet = ()  =>  {
    const [loading, setLoading] = useState(false);
    const [planet, setPlanet] = useState({});
    const [error, setError] = useState(false);

    const uptadePlanet = () => {
        setLoading(true);
        const id = Math.floor(Math.random() * 25)  + 2 ;
        swapi.getPlanet(id)
            .then(planet => {
                setLoading(false);
                setPlanet({...planet})
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            })
    };
    useEffect(() => {

        uptadePlanet();
        const interval = setInterval(() => {
            console.log('uptade')
            uptadePlanet();
        }, 20000);
        return () => {
            console.log('component-y merav')
            clearInterval(interval)
        }

    },[]);

    const renderLoading = loading ?  <Spinner /> : null;
    const renderPlanetView = !loading && !error ? <PlanetView planet={planet}/> : null;
    const renderErrorIndicator = error ? <ErrorIndicator /> : null;
    return (
        <div className="random-planet jumbotron rounded">
            {renderLoading}
            {renderPlanetView}
            {renderErrorIndicator}
        </div>
    );
};
export default RandomPlanet;

