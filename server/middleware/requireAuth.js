const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req,res,next) =>{
    const { authorisation } = req.headers
    if(!authorisation){
        return res.status(401).json({error: "Authorisation token required"})
    }

    const token = authorisation.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findById({_id}).select('_id, isAdmin')

        console.log(req.user)

        if(req.user.isAdmin){
            next()
        }
        else{
            throw Error("not an Admin")
        }

    } catch (error) {
        console.error(error)
        res.status(401).json({error: "request not authorised"})
    }

}

module.exports = requireAuth;