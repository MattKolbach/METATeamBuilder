
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('GenericEmployeeName');

    expect(employee.name).toBe('GenericEmployeeName');
    expect(employee.id).toEqual(expect.any(Number));
    
})