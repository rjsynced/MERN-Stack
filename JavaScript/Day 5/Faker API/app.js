const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.number();
        this.id = faker.random.numeric();
    }
}

const newUser = new User();
console.log(newUser);


class Company {
    constructor() {
        this.id = faker.random.numeric();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
const newCompany = new Company
console.log(newCompany)

app.get('/api/users/new', (req, res) => {
    let user = new User();
    res.json({ results: user })
});

app.get('/api/companies/new', (req, res) => {
    let company = new Company();
    res.json({ results: company })
});

app.get('/api/user/company', (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({newUser, newCompany});
});



