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

  store() {
    // criar novo registro
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
