const userModel = require('../models/userModel')

const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

const signupUser = async (req,res)=>{
    const {username,password} = req.body
    try {
        const user = await userModel.signup(username,password)
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {loginUser,signupUser};