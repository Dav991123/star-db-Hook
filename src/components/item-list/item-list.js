import React, { useState, useEffect } from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spiner";
import ErrorIndicator from "../error-indicator";
import './item-list.css';


const swapi = new SwapiService();
const ItemList = () =>  {
    const [peopleList, setPeopleList] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        swapi.getAllPeople()
            .then(peoples => {
                setPeopleList(peoples);
                setError(false)
            })
            .catch(() => {
                console.log('errror');
                setError(true)
            })
    },[]);
    const renderItems = () => {
        return peopleList.map(({id, name}) => (
            <li
                key={id}
                className="list-group-item"
                onClick={() => console.log(id)}
            >
                {name}
            </li>
        ))
    };
    if(!peopleList && !error) {
        return <Spinner />
    }

    return (
        <ul className="item-list list-group">
            { error ? <ErrorIndicator /> :   renderItems() }

        </ul>
    );
};
export default ItemList;
