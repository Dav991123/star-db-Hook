import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
    const [showRandomPlanet, setShowRandomPlanet] = useState(true);
    const [selectedPerson, setSelectedPerson] = useState(null);
    return (
        <div className={'App'}>
            <Header />
            {
                showRandomPlanet ?  <RandomPlanet /> : null
            }
            <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={() => setShowRandomPlanet(!showRandomPlanet)}
            >
                Toggle Random Planet
            </button>

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onPersonSelected={setSelectedPerson}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </div>
        </div>
    );
};

export default App;