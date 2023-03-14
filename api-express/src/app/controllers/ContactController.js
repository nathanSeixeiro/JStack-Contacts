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
  delete() {
    //deletar um registro
  }
}

// singleton
module.exports = new ContactController();
