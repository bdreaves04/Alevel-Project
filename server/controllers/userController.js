const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn: '6h'})
}

const loginUser = async (req, res) => {
    const{username, password} = req.body
    try {
        const user = await userModel.login(username,password)

        //creating token for user when signing up
        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }    
}

const signupUser = async (req,res)=>{
    const {username,password} = req.body
    try {
        const user = await userModel.signup(username,password)

        //creating token for user when signing up
        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser,signupUser};