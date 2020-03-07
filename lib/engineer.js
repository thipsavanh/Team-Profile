const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, title, github) {
        super(name, id, email, title);
        this.github = github;
    }
    geGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;