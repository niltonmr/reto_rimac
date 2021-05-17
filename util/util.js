'use strict';

exports.formatDate = fecha => {

    if (this.validarFecha(fecha)) {
        let arrayFecha = fecha.split("/");
        let dia = parseInt(arrayFecha[0]);
        let mes = parseInt(arrayFecha[1])-1;
        let ano = parseInt(arrayFecha[2]);
        let newFecha = new Date(ano,mes,dia);

        let newStringFecha = newFecha.toLocaleString('es-PE');
        return newStringFecha;

    } else {
        return 'Fecha invalida';
    }


}

exports.validarFecha = fecha => {

    let regex = /^\d{1,2}\/\d{1,2}\/\d{1,4}$/gm;
    let valido = !!fecha.match(regex);

    if (valido) {
        let arrayFecha = fecha.split("/");
        let dia = parseInt(arrayFecha[0]);
        let mes = parseInt(arrayFecha[1]);
        let ano = parseInt(arrayFecha[2]);

        let dmax = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (ano % 4 == 0) dmax[1] = 29;

        let diaOk = (dia >= 1) && (dia <= dmax[mes - 1]);
        let mesOk = (mes >= 1) && (mes <= 12);
        let anoOk = (ano >= 1) && (ano < 10000)

        valido = diaOk && mesOk && anoOk;

    }
    return valido;

}


module.exports.translateAtributes = async (body) => {
    let dic = {
        "count":"contar",
        "next":"siguiente",
        "previous":"anterior",
        "name":"nombre",
        "height": "altura",
        "mass": "masa",
        "hair_color":  "color_de_pelo",
        "skin_color": "color_de_piel",
        "eye_color": "color_de_ojos",
        "birth_year": "año_de_nacimiento",
        "gender": "género",
        "homeworld": "mundo_natal",
        "films": "peliculas",
        "species": "especies",
        "vehicles": "vehiculos",
        "starships": "naves_estelares",
        "created": "creado",
        "edited": "editado",
        "model": "modelo",
        "manufacturer": "fabricante",
        "cost_in_credits": "costo_en_créditos",
        "length": "longitud",
        "max_atmosphering_speed": "velocidad_máxima_atmósferica",
        "crew": "tripulación",
        "passengers": "pasajeros",
        "cargo_capacity": "Capacidad_de_carga",
        "consumables": "consumibles",
        "vehicle_class": "clase_vehículo",
        "pilots": "pilotos",
    }
    for (let clave in dic){
        let en = '"' + clave + '":';
        let es = '"' + dic[clave] + '":';
        body = JSON.parse(JSON.stringify(body).split(en).join(es));
    }
    return body;
}
