const Dynamo = require('../api/cliapi');

test('Dynamo is an object', () => {
    expect(typeof Dynamo).toBe('object');
});

test('dynamo has get and write', () => {
    expect(typeof Dynamo.putClient).toBe('function');
    expect(typeof Dynamo.getClient).toBe('function');
});
