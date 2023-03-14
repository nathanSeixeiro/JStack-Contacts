const ContactsRepositories = require("../repositories/ContactsRepositories");

class ContactController {
  async index(req, res) {
    //listar os contatos
    const contacts = await ContactsRepositories.findAll();
    res.json(contacts)
  }
  show() {
    // obter um contato
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
