const User = require('../models/Users')
const repository = require('../repositories/users')
const { encryptPassword } = require('../utils/crypted')
const { createToken } = require("../utils/jwt")

const create = async (data) => {
    const userFound = await repository.getOne({email: data.email})
    if(userFound.id){
        throw {status: 409, message: 'User Already Exists'}
    }
    const user = new User({
        ...data,
        id: undefined,
        created_at: undefined,
        updated_at: undefined
    })
    const { salt, encryptedPassword: password } = encryptPassword(data.password)

    const id = await repository.create({ ...user, password, salt })

    const created = await repository.getOne({id: id})
    return created.view()
    
}

const login = async (loginData) => {
    const user = await repository.getOne({email: loginData.email})
    if (!user) {
        throw { status: 401, message: "Not Authorized" }
    }
    const {encryptedPassword} = encryptPassword(loginData.password, user.salt)
    if(encryptedPassword !== user.password){
        throw { status: 401, message: "Not Authorized" }
    }

    const token = createToken(user.id)
    return {
        user: user.view(),
        token
    }
}

const getById = async (id) => {
    const user = await repository.getOne({id: id})
    if(!user){
        throw {status: 404, message: "Not Found"}
    }
    return user
}

module.exports = {
    create,
    login,
    getById,

}