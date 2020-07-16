const {Router} = require('express')
const router = new Router();
const controller = require('../controllers/products')
const routName = '/products'


//Lista todos os produtos
router.get(routName, controller.getAll);

//Retorna um produto expecifico
router.get(`${routName}/:id`, controller.getById);
7
//Cria os produtos
router.post(routName, controller.create);

//Edita os dados de um produto
router.patch(`${routName}/:id`, controller.update)
    
//Deleta um produto baseado no id
router.delete(`${routName}/:id`, controller.del)

module.exports = router