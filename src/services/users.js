const User = require('../models/Users')
const repository = require('../repositories/users')
const { encryptPassword } = require('../utils/crypted')

const create = async (data) => {
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


}


module.exports = {
    create,
    login,

}