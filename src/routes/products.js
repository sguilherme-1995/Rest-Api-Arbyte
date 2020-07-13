const {Router} = require('express')
const router = new Router();
const knex = require('../database');

const routName = '/products'
const tableName = 'products'
//Lista todos os produtos
router.get(routName, (req, res) => {
    knex('products').then(result => res.json(result))
    
});

//Retorna um produto expecifico
router.get(`${routName}/:id`, (req, res) => {
    knex(tableName)
        .where({id: req.params.id})
        .then((result) => res.status(201).json(result))
});

router.post(routName, (req, res) => {

    knex(tableName)
        .insert(req.body)
        .then((inserted) => res.status(201).json(inserted))
   
});

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
router.delete(`${routName}/:id`, (req, res) => {
    knex(tableName)
        .where({id: req.params.id})
        .del()
        .then(() => res.status(204).end())
})

module.exports = router