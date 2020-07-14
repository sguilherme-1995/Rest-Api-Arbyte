const knex = require("../../database");
const products = require("../services/products");
const tableName = "products"

//SELECT * FROM products
const getAll = () => knex(tableName)

//SELECT * FROM products WHERE id=?
const getById = (id) => {
    return knex(tableName)
    .where({ id })
    .then(([product]) => product)
}

//INSERT INO products (name, price) VALUES (?, ?)
const create = (product) => {
    return knex(tableName)
    .insert(product).then(([inserted]) => inserted)
}

//DELETE FROM products WHERE id = ?
const del = (id) => {
    return knex(tableName)
        .where({id: id})
        .del()
}

module.exports = {
    getAll,
    getById,
    create,
    del,

}