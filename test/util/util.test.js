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




})
