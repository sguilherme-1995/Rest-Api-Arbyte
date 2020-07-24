const moment = require('moment')
const utcNow = moment().utc().format()

function Users({ 
    id, 
    name, 
    email, 
    password,
    salt,
    created_at = utcNow,
    updated_at = utcNow
} = {}) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.created_at = created_at;
    this.updated_at = updated_at;

}

Users.prototype.view = function (){
    return {
        id: this.id,
        name:this.name,
        email:this.email,
        created_at: this.created_at,
        updated_at: this.updated_at,
    }
}

module.exports = Users