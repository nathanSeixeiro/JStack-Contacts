const ContactsRepositories = require("../repositories/ContactsRepositories");

class ContactController {
  async index(req, res) {
    const contacts = await ContactsRepositories.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepositories.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "user not found" });
    }

    res.json(contact);
  }

  async store(req, res) {
    const { name, email, phone, category_id } = req.body;

    const contactsExists = await ContactsRepositories.findByEmail(email);

    if (!name && !email) {
      return res
        .status(400)
        .json({ error: "Insert all required camps" });
    }

    if (contactsExists) {
      return res
        .status(400)
        .json({ error: "this email is already been token" });
    }

    const contact = await ContactsRepositories.create({
      name,
      email,
      phone,
      category_id,
    });

    res.json(contact);
  }
  update() {
    //editar um registro
  }
  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepositories.findById(id);

    if (!contact) {
      return res.status(404).json({ error: "user not found" });
    }

    await ContactsRepositories.delete(id);

    res.sendStatus(204);
  }
}

// singleton
module.exports = new ContactController();
