class ContactController{
    index(req, res){
        //listar os contatos
        res.send('testando')
    }
    show(){
        // obter um contato
    }
    store(){
        // criar novo registro
    }
    update(){
        //editar um registro 
    }
    delete(){
        //deletar um registro 
    }
}

// singleton
module.exports = new ContactController()