
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Samantha', 3, "Samantha@email.com", "MATC");

    expect(intern.name).toBe('Samantha');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('Samantha' + '@email.com');
    expect(intern.schoolName).toEqual(expect.anything());
})