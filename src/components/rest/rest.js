const URL = "http://localhost"
//const URL = "http://raspberrypi"
const PORT = 5000

export default class RESTInterface{

    constructor() {
        this.uri = URL + ':' + PORT
        this.client = new XMLHttpRequest();
    }

    getValues(identifier){
        let endpoint = `/values/${identifier}`;
        this.client.open("GET", this.uri + endpoint, false);
        this.client.setRequestHeader("Content-Type", "application/json");
        this.client.send();
        if(this.client.status === 200){
            return this.parseResponse(JSON.parse(this.client.responseText), identifier)
        }
        throw Error('Couldn\' reach the backennd: ' + this.client.status)    
    }

    getIdentifiers() {
        let endpoint = `/values/identifiers`;
        this.client.open("GET", this.uri + endpoint, false);
        this.client.setRequestHeader("Content-Type", "application/json");
        this.client.send();
        if(this.client.status === 200){
            return JSON.parse(this.client.responseText)
        }
        throw Error('Couldn\' reach the backennd: ' + this.client.status)    
    }

    parseResponse(response, identifier) {
        let timestamps = []
        let values = []

        response.forEach(row => {
            timestamps.push(new Date(row.timestamp * 1000))
            values.push(row[identifier])
        })

        return {
            timestamps,
            values
        }
    }
}