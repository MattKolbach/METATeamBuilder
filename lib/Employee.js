class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; // should this be driven by an array index or some sort of counter?
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}



module.exports = Employee;