import React, { useState, useEffect } from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spiner";
import ErrorIndicator from "../error-indicator";

import './person-details.css';
const swapi = new SwapiService();

const PersonDetails = ({ personId }) => {
    const [ person, setPerson ] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const uptadePerson = () => {
        setLoading(true);
        if(!personId) {
            return false
        }
        swapi.getPerson(personId)
            .then((person) => {
                setPerson(person);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(false);
            })
    };
    useEffect(() => {
        uptadePerson();
    }, [personId]);

    console.log(person, 'PersonDetails');
    if(!person) {
        return <span>Select a person from a list</span>
    }
    if(loading && !error) {
        return <Spinner />
    }
    if(error) {
        return <ErrorIndicator />
    }
    const {id, name, gender, birthYear, eyeColor} = person;

    return (
        <div className="person-details card">
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};
export default PersonDetails;
