const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireLoggedIn = async (req,res,next) =>{
    const { authorisation } = req.headers
    if(!authorisation){
        return res.status(401).json({error: "Authorisation token required"})
    }

    const token = authorisation.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findById({_id})

        if(!req.user){
            throw Error("Not Logged In")
        }
        else{
            next()
        }

    } catch (error) {
        res.status(401).json({error: "request not authorised"})
    }

}

module.exports = requireLoggedIn;