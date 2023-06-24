const {Router} = require('express');
const ContactController = require('./app/controllers/ContactController');

const routes = Router()

routes.get("/contacts", ContactController.index);
routes.post("/contacts", ContactController.store)
routes.put("/contacts/:id", ContactController.update)
routes.get("/contacts/:id", ContactController.show)
routes.delete("/contacts/:id", ContactController.delete)

module.exports = routes