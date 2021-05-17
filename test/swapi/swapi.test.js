const Swapi = require('../../api/swapi/swapi')

test('Responses is an object', () => {
    expect(typeof Swapi).toBe('object');
});
