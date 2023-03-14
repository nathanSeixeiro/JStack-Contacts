const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Nathan",
    email: "nathan@gmail.com",
    phone: "67496749",
    categori_id: v4(),
  },
  {
    id: v4(),
    name: "Didis",
    email: "didis@gmail.com",
    phone: "694846749",
    categori_id: v4(),
  },
];

class ContactsRepositories {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create({name, email, phone, category_id}) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id
      }

      contacts.push(newContact)
      resolve(newContact);
    });
  }
  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepositories();
