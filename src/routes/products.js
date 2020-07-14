const {Router} = require('express')
const router = new Router();
const knex = require('../../database');
const controller = require('../controllers/products')
const routName = '/products'
const tableName = 'products'
//Lista todos os produtos
router.get(routName, controller.getAll);

//Retorna um produto expecifico
router.get(`${routName}/:id`, controller.getById);

router.post(routName, controller.create);

//Edita os dados de um produto
router.patch(`${routName}/:id`, async (req, res) => {
    try {
        const [found] = await knex(tableName).where({id: req.params.id})
        if(!found){
            const err = Error("Not Found")
            err.status = 404
            throw err
        }
        const updated = await knex(tableName).where({id: req.params.id}).update(req.body)
        res.json(updated)
    }catch (err){
        res.status(err.status || 500).json({ message: err.message})
    }
    })
    
//Deleta um produto baseado no id
router.delete(`${routName}/:id`, controller.del)

module.exports = router