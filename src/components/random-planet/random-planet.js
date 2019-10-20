import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spiner';

import './random-planet.css';
const swapi = new SwapiService();

const RandomPlanet = ()  =>  {
    const [loading, setLoading] = useState(false)
    const [planet, setPlanet] = useState({});
    const uptadePlanet = () => {
        setLoading(true);
        const id = Math.floor(Math.random() * 25)  + 2 ;
        swapi.getPlanet(id)
            .then(planet => {
                setLoading(false)
                setPlanet({...planet})
            })
    };
    useEffect(() => {
        uptadePlanet();

    },[])

    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <div className="random-planet jumbotron rounded">
            { loading && <Spinner />}

            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default RandomPlanet