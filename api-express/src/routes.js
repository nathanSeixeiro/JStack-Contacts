const {Router} = require('express');
const ContactController = require('./app/controllers/ContactController');

const routes = Router()

routes.get("/contacts", ContactController.index);
routes.post("/contact", ContactController.store)
routes.get("/contact/:id", ContactController.show)
routes.delete("/contact/:id", ContactController.delete)

module.exports = routes