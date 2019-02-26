import { GeoInfo } from "./geojson/geoInfo";



export class semillaInfo{
    _id:string;
    imagenUrl?:string;
    testimonialType?:string;
    audios?:[string?,string?,string?,string?]
    textos?:{
        text1?:string;
        text?:string;
        text3?:string;
        text4?:string;
    };;
    desc?:string;
    geoInfo?:GeoInfo;
    published?:boolean;
    name?:string;
    gender?:string;
    age?:string;
    martialStatus?:string;
    educativeLevel?:string;
    VenezuelaOcupation?:string;
    CurrentOcupation?:string;
    device?:string;
    dateCreated?:Date;
    place?:string;
    timesShared?:number;
    step?:number;
    userId?:number;
}