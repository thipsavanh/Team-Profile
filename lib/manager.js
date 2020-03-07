const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email, title);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;