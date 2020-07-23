const knex = require("../../database")
const User = require("../models/Users")
const tableName = 'users'

const create = async (user) => {
    const [id] = await knex(tableName).insert(user)
    return id
}

const getOne = async (filter) => {
    const [user] = await knex(tableName).where(filter)
    return new User(user)

}



module.exports = {
    create,
    getOne,

}