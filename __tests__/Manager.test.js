
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Rose', 1, "Rose@email.com", "321A");

    expect(manager.name).toBe('Rose');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('Rose' + '@email.com');
    expect(manager.officeNumber).toEqual(expect.anything());
})

