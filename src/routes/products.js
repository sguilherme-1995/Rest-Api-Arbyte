const {Router} = require('express')
const router = new Router();

const routName = '/products'
//Lista todos os produtos
router.get(routName, (req, res) => {
    res.json([{
        message: 'Vai retornar todos os produtos',
    }])
});

//Retorna um produto expecifico
router.get(`${routName}/:id`, (req, res) => {
        res.json([{message: 'Vai retornar os dados de um produtos com um id', 
        id: req.params.id,
    }])
});

// Cria um produto novo
router.post(routName, (req, res) => {

    const produto = {
        name: req.body.name,
        value: req.body.value
    }

    res.status(201).json({
        message: 'Vai criar um produto',
        produtoCriado: produto
    });
});

//Edita os dados de um produto
router.patch(`${routName}/:id`, (req, res) => {
    res.json({
        message: 'Vai editar od dados de um produto baseado em um id',
        id: req.params.id,
    })
})

//Deleta um produto baseado no id
router.delete(`${routName}/:id`, (req, res) => {
    res.status(204).end()
})

module.exports = router