const db = require('../../database')
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
  async findAll() {
    const rows = await db.query('SELECT * FROM contacts')
    return rows
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id])
    return row
  }

  async findByEmail(email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email])
    return row
  }

  async create({name, email, phone, category_id}) {
   const [row] = await db.query(`INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `,[name, email, phone, category_id]
    )

    return row
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepositories();
