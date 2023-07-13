interface CityInterface{
    
    code:string;
    name:string;
    state: string; //State.code
    lat: number;
    lng: number;

}


export class City implements CityInterface{
    code: string;
    name: string;
    state: string;
    lat: number;
    lng: number;
    
    constructor({code,name,state,lat,lng}:CityInterface) {
        this.code = code;
        this.name = name;
        this.state = state;
        this.lat = lat;
        this.lng = lng;
    }    

}