const repository = require('../repositories/products')

const getAll = () => repository.getAll()

const getById = async (id) => {
    const product = await repository.getById(id)
    if(!product){
        throw { status: 404, message: "Not Found" }
    }
    return product
}

const create = async (product) => {
    const id = await repository.create(product)
    const created = await repository.getById(id)
    return created
}

const update = async (id, data) => {
    const product = await repository.getById(id)
    if(!product){
        throw { status: 404, message: "Not Found" }
    }
    const merged = Object.assign({}, product, data)
    await repository.update(id, merged)
    const updated = await repository.getById(id, data)
    return updated
}

const del = async (id) => { 
    const product = await repository.getById(id)
    if(!product){
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