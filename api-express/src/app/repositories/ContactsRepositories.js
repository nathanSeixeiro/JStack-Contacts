const { v4 } = require("uuid");

const contacts = [
  {
    id: v4(),
    name: "Nathan",
    email: "nathan@gmail.com",
    phone: "67496749",
    categori_id: v4(),
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
