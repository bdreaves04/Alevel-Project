const mongoose = require('mongoose');
const Schema = mongoose.Schema
//hashes passwords
const bcrypt = require('bcrypt')
//validates strong passwords
const validaor = require('validator')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            reuired: true,
        }
    }
)

userSchema.statics.signup = async function(username,password) {

    //checking fields filled properly
    if(!username || !password){
        throw Error('all fields need completing')
    }

    //checking password is strong
    if(!validator.isStrongPassword(password)){
        throw Error('Password not Strong Enough')
    }

    //checking if email exists in db already, if it does throw error
    const exists = await this.findOne({username})
    if(exists){
        throw Error('username already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({username, password:hash})
    return user

}

module.exports = mongoose.model('User', userSchema);