
const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('River', 2, "River@email.com", "RiverKolbach");

    expect(engineer.name).toBe('River');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('River' + '@email.com');
    expect(engineer.githubUsername).toEqual(expect.anything());
})