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
    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }
    // planets request
    async getAllPlanets() {
        const response = await this.getResource('/planets/');
        return response.results
    }
    getPlanet(id) {
        return this.getResource(`/planet/${id}/`)
    }
    //Star ship request
    async getAllStarships() {
        const response = await this.getResource('/starships/');
        return response.results
    }
    getAllStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
}
