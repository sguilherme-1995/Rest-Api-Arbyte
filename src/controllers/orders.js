const service = require('../services/orders')
const handleError = require('./handleError')
const Product = require('../models/Product')
const Order = require('../models/Order')

const getAll = async (req, res) => {
    try {
        const orders = await service.getAll()
        res.json(orders)
    } catch (error) {
        handleError(res, error)
    }
}
const getById = (req, res) => {
    service.getById(req.params.id).then((service) => res.json(service))
        .catch(err => handleError(res, err))
}

const create = async (req, res) => {
    try {
    const order = new Order(req.body)
    // if(!service.quantity || !service.value){
    //     throw {status: 400, message: "Invalid data"}
    // }
    const created = await service.create(order)
       res.status(201).json(created)
    } catch(err) {
        handleError(res, err)
    }
}

const update = async (req, res) => {
    try{
        const updated = await service.update(req.params.id, req.body)
        res.json(updated)
    }catch(error){
        handleError(res, error)
    }
}

const del = (req, res) => {
    service.del(req.params.id).then(() => res.status(204).end())
        .catch(err => handleError(res, err))

}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del,

}