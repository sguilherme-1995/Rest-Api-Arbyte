const knex = require('../../database')
const tableName = 'orders'
const moment = require('moment')

const getAll = () => knex(tableName)

const getById = (id) => {
    return knex(tableName)
    .where({ id })
    .then(([service]) => service)
}

const create = (service) => {
    return knex(tableName).returning('id')
    .insert(service).then(([inserted]) => inserted)
}

const update = (id, order) => {
    order.updated_at = moment().utc().format()
    return knex(tableName).where({ id: id }).update(order)
}

const del = (id) => {
    return knex(tableName)
        .where({id: id})
        .del()
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del,
    
}