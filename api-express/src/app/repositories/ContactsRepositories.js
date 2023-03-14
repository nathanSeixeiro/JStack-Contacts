const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Nathan",
    email: "nathan@gmail.com",
    phone: "67496749",
    categori_id: uuid(),
  },
];

class ContactsRepositories {
  findAll() {
    return new Promise((resolve) => {
        resolve(contacts)
    });
  }
}

module.exports = new ContactsRepositories();
