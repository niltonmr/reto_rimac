'use strict';

const axios = require('axios')
const util = require('../../util/util')

module.exports.getOnePeople = async (event, context, callback) => {

    try{

        let iid = event.pathParameters.id;

        let options = {
            host: 'swapi.py4e.com',
            path: '/api/people/',
            headers: {},
            id: iid,
        };
        let onePeople = await getService(options);
        onePeople= await util.translateAtributes(onePeople); 

        const response = {
            statusCode: 200,
            body: JSON.stringify(onePeople),
        };
        console.log("response: ", response)
        return callback(null,response);
    } catch (e) {
        const error = {
            statusCode: 400,
            error: e,
        };       
        return callback(error,null);
      }
}

module.exports.getAllPeople = async (event, context, callback) => {

    try{
        let options = {
            host: 'swapi.py4e.com',
            path: '/api/people/',
            headers: {},
            id: '',
        };
        let allPeople = await getService(options);
        allPeople= await util.translateAtributes(allPeople); 

        const response = {
            statusCode: 200,
            body: JSON.stringify(allPeople),
        };
        console.log("response: ", response)
        return callback(null,response);
    } catch (e) {
        const error = {
            statusCode: 400,
            body: JSON.stringify(e),
        };       
        return callback(error,null);
      }
}


module.exports.getOneVehicle = async (event, context, callback) => {

    try{
        let iid = event.pathParameters.id;
        let options = {
            host: 'swapi.py4e.com',
            path: '/api/vehicles/',
            headers: {},
            id: iid,
        };

        let oneVehicle = await getService(options);
        oneVehicle= await util.translateAtributes(oneVehicle); 

        const response = {
            statusCode: 200,
            body: JSON.stringify(oneVehicle),
        };

        return callback(null,response);
    } catch (e) {
        const error = {
            statusCode: 400,
            error: e,
        };       
        return callback(error,null);
      }
}

module.exports.getAllVehicles = async (event, context, callback) => {

    try{
        let options = {
            host: 'swapi.py4e.com',
            path: '/api/vehicles/',
            headers: {},
            id: '',
        };
        let allVehicles = await getService(options);
        allVehicles= await util.translateAtributes(allVehicles); 

        const response = {
            statusCode: 200,
            body: JSON.stringify(allVehicles),
        };
        console.log("response: ", response)
        return callback(null,response);
    } catch (e) {
        const error = {
            statusCode: 400,
            body: JSON.stringify(e),
        };       
        return callback(error,null);
      }
}

async function getService(options) {
    let url = "https://" + options.host + options.path
    url = (options.id.length>0)? url  + options.id : url;
    console.log("url::", url)
    const res = await axios.get(url)
      .then(function (response) {
        return response.data
      })
    return res;
}

// async function translateAtributes(body) {
//     let dic = {
//         "count":"contar",
//         "next":"siguiente",
//         "previous":"anterior",
//         "name":"nombre",
//         "height": "altura",
//         "mass": "masa",
//         "hair_color":  "color_de_pelo",
//         "skin_color": "color_de_piel",
//         "eye_color": "color_de_ojos",
//         "birth_year": "año_de_nacimiento",
//         "gender": "género",
//         "homeworld": "mundo_natal",
//         "films": "peliculas",
//         "species": "especies",
//         "vehicles": "vehiculos",
//         "starships": "naves_estelares",
//         "created": "creado",
//         "edited": "editado",
//         "model": "modelo",
//         "manufacturer": "fabricante",
//         "cost_in_credits": "costo_en_créditos",
//         "length": "longitud",
//         "max_atmosphering_speed": "velocidad_máxima_atmósferica",
//         "crew": "tripulación",
//         "passengers": "pasajeros",
//         "cargo_capacity": "Capacidad_de_carga",
//         "consumables": "consumibles",
//         "vehicle_class": "clase_vehículo",
//         "pilots": "pilotos",
//     }
//     for (let clave in dic){
//         let en = '"' + clave + '":';
//         let es = '"' + dic[clave] + '":';
//         body = JSON.parse(JSON.stringify(body).split(en).join(es));
//     }
//     return body;
// }
