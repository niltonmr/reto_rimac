const { formatDate, validarFecha, translateAtributes } = require('../../util/util');

describe('Verificacion de fechas', () => {
    test('Verificando fechas validas', () => {
        expect(validarFecha('31/1/1990')).toBe(true);
        expect(validarFecha('29/2/1992')).toBe(true);
        expect(validarFecha('31/12/1992')).toBe(true);
        expect(validarFecha('1/1/9999')).toBe(true);
        expect(validarFecha('1/1/1')).toBe(true);
        expect(validarFecha('01/09/1992')).toBe(true);
    });
    test('Verificando fechas invalidas', () => {
        expect(validarFecha('32/1/1990')).toBe(false);
        expect(validarFecha('29/2/1990')).toBe(false);
        expect(validarFecha('0/12/1992')).toBe(false);
        expect(validarFecha('1/0/2020')).toBe(false);
        expect(validarFecha('texto')).toBe(false);
        expect(validarFecha('1/1/text')).toBe(false);
        expect(validarFecha('001/09/1992')).toBe(false);
        expect(validarFecha('01/009/1992')).toBe(false);
        expect(validarFecha('01/09/01992')).toBe(false);
    });
    test('verificando formato de fechas', () => {
        expect(formatDate('31/1/1990')).toBe('31/1/1990 00:00:00');
        expect(formatDate('29/2/1992')).toBe('29/2/1992 00:00:00');
        expect(formatDate('31/12/1992')).toBe('31/12/1992 00:00:00');
        expect(formatDate('1/1/9999')).toBe('1/1/9999 00:00:00');
        expect(formatDate('1/1/1')).toBe('1/1/1901 00:00:00');
        expect(formatDate('01/09/1992')).toBe('1/9/1992 00:00:00');
    })
    test('Verificando formato de fechas invalidas', () => {
        expect(formatDate('32/1/1990')).toBe("Fecha invalida");
        expect(formatDate('29/2/1990')).toBe("Fecha invalida");
        expect(formatDate('0/12/1992')).toBe("Fecha invalida");
        expect(formatDate('1/0/2020')).toBe("Fecha invalida");
        expect(formatDate('texto')).toBe("Fecha invalida");
        expect(formatDate('1/1/text')).toBe("Fecha invalida");
        expect(formatDate('001/09/1992')).toBe("Fecha invalida");
        expect(formatDate('01/009/1992')).toBe("Fecha invalida");
        expect(formatDate('01/09/01992')).toBe("Fecha invalida");
    });

    test('Verificando fo el traductor', async () => {
        let de = JSON.stringify(await translateAtributes({ count: "valor" }));
        let aa = JSON.stringify({ contar: "valor" });
        expect(de).toEqual(aa);
        expect(JSON.stringify(await translateAtributes({ count: "valor" }))).toEqual(JSON.stringify({ contar: "valor" }));
        expect(JSON.stringify(await translateAtributes({ next: "valor" }))).toEqual(JSON.stringify({ siguiente: "valor" }));
        expect(JSON.stringify(await translateAtributes({ previous: "valor" }))).toEqual(JSON.stringify({ anterior: "valor" }));
        expect(JSON.stringify(await translateAtributes({ height: "valor" }))).toEqual(JSON.stringify({ altura: "valor" }));
        expect(JSON.stringify(await translateAtributes({ mass: "valor" }))).toEqual(JSON.stringify({ masa: "valor" }));
        expect(JSON.stringify(await translateAtributes({ hair_color: "valor" }))).toEqual(JSON.stringify({ color_de_pelo: "valor" }));
        expect(JSON.stringify(await translateAtributes({ skin_color: "valor" }))).toEqual(JSON.stringify({ color_de_piel: "valor" }));
        expect(JSON.stringify(await translateAtributes({ eye_color: "valor" }))).toEqual(JSON.stringify({ color_de_ojos: "valor" }));
        expect(JSON.stringify(await translateAtributes({ birth_year: "valor" }))).toEqual(JSON.stringify({ año_de_nacimiento: "valor" }));
        expect(JSON.stringify(await translateAtributes({ gender: "valor" }))).toEqual(JSON.stringify({ género: "valor" }));
        expect(JSON.stringify(await translateAtributes({ homeworld: "valor" }))).toEqual(JSON.stringify({ mundo_natal: "valor" }));
        expect(JSON.stringify(await translateAtributes({ species: "valor" }))).toEqual(JSON.stringify({ especies: "valor" }));
        expect(JSON.stringify(await translateAtributes({ vehicles: "valor" }))).toEqual(JSON.stringify({ vehiculos: "valor" }));
        expect(JSON.stringify(await translateAtributes({ starships: "valor" }))).toEqual(JSON.stringify({ naves_estelares: "valor" }));
        expect(JSON.stringify(await translateAtributes({ created: "valor" }))).toEqual(JSON.stringify({ creado: "valor" }));
        expect(JSON.stringify(await translateAtributes({ edited: "valor" }))).toEqual(JSON.stringify({ editado: "valor" }));
        expect(JSON.stringify(await translateAtributes({ model: "valor" }))).toEqual(JSON.stringify({ modelo: "valor" }));
        expect(JSON.stringify(await translateAtributes({ manufacturer: "valor" }))).toEqual(JSON.stringify({ fabricante: "valor" }));
        expect(JSON.stringify(await translateAtributes({ cost_in_credits: "valor" }))).toEqual(JSON.stringify({ costo_en_créditos: "valor" }));
        expect(JSON.stringify(await translateAtributes({ passengers: "valor" }))).toEqual(JSON.stringify({ pasajeros: "valor" }));
        expect(JSON.stringify(await translateAtributes({ cargo_capacity: "valor" }))).toEqual(JSON.stringify({ Capacidad_de_carga: "valor" }));
        expect(JSON.stringify(await translateAtributes({ consumables: "valor" }))).toEqual(JSON.stringify({ consumibles: "valor" }));
        expect(JSON.stringify(await translateAtributes({ vehicle_class: "valor" }))).toEqual(JSON.stringify({ clase_vehículo: "valor" }));
        expect(JSON.stringify(await translateAtributes({ pilots: "valor" }))).toEqual(JSON.stringify({ pilotos: "valor" }));



    });


})

