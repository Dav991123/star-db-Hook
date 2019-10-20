export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    //root getting function
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`not fetch ${url} ${res.status}`)
        }
        return await res.json()
    }
    // people request
    async getAllPeople() {
        const response = await this.getResource('/people/');
        return response.results
    }
    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return await this._transformPerson(person);
    }
    // planets request
    async getAllPlanets() {
        const response = await this.getResource('/planets/');
        return response.results;
        // return response.results.map(this._transformPlanet)
    }
    async getPlanet(id) {
        const planet =  await this.getResource(`/planets/${id}/`);
        return  await this._transformPlanet(planet)
    }
    //Star ship request
    async getAllStarships() {
        const response = await this.getResource('/starships/');
        return response.results
    }
    async getAllStarship(id) {
        const starShip = await this.getResource(`/starships/${id}/`);
        return await this._transformStarship(starShip)
    }
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1]
    }
    // transform data
    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _transformStarship(starship) {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    };

}
