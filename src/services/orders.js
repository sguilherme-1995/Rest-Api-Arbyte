const repository = require('../repositories/orders')

const getAll = () => repository.getAll()

const getById = async (id) => {
    const service = await repository.getById(id)
    if(!service){
        throw { status: 404, message: "Not Found" }
    }
    return service
}

const create = async (order) => {
    const id = await repository.create(order)
    const created = await repository.getById(id)
    return created
}

const update = async (id, data) => {
    data.id = undefined
    data.created_at = undefined
    const order = await repository.getById(id)
    if(!order){
        throw { status: 404, message: "Not Found" }
    }
    const merged = Object.assign({}, order, data)
    await repository.update(id, merged)
    const updated = await repository.getById(id, data)
    return updated
}

const del = async (id) => { 
    const order = await repository.getById(id)
    if(!order){
        throw { status: 404, message: "Not Found" }
    }
    const deleted = await repository.del(id)
    return deleted
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    del,

}