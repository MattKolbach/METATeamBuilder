
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('bob', 5, "bob@email.com");

    expect(employee.name).toBe('bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('bob' + '@email.com');
})