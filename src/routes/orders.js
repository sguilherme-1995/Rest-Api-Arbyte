const {Router} = require('express')
const router = new Router();
const controller = require('../controllers/orders')

const routName = '/orders'
//Lista todos os pedidos
router.get(routName, controller.getAll);

//Retorna um pedido expecifico
router.get(`${routName}/:id`, controller.getById);

// Cria um pedido novo
router.post(routName, controller.create);

//Edita os dados de um pedido
router.patch(`${routName}/:id`, controller.update)

//Deleta um pedido baseado no id
router.delete(`${routName}/:id`, controller.del)

module.exports = router