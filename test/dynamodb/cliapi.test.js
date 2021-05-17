const Dynamo = require('../../api/dynamodb/cliapi');
const util = require('../../util/util')

test('Dynamo is an object', () => {
    expect(typeof Dynamo).toBe('object');
});

test('dynamo has get and write', () => {
    expect(typeof Dynamo.putClient).toBe('function');
    expect(typeof Dynamo.getClient).toBe('function');
});

const data = 'respuesta';
const iid = '1234567890';


let params1 = {
    TableName: 'reto-rimac-dev',
    Item: {
        id: iid,
        dni: '10102020',
        name: 'Julio',
        lastName: 'Figueroa',
        address: 'Calle Lima nro 4432',
        birthday: util.formatDate('1/1/1990'),
        salary: '1200'
      },
};

let params2 = {
    TableName: 'reto-rimac-dev',
    Key: {
        id: iid,
    },
};




// test('Escribir tabla dynamo', async () => {
//     expect.assertions(1);
//     try {
//         const res = await Dynamo.clientPUT(params1);
//         expect(res).toBe(data);
//     } catch (error) {
//         console.log('error escribiendo en dynamo', error);
//     }
// });

// test('Leer tabla dynamo', async () => {
//     expect.assertions(1);
//     try {
//         const res = await Dynamo.clientGET(params2);
//         expect(res).toEqual(data)
//     }catch (error) {
//         console.log('error al leer la tabla', error)
//     };
// })




