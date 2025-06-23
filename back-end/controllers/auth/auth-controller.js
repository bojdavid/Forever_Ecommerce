const bcyrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const user = require('../../models/User')

//register
const registerUser = async(req, res) =>{
    const {userName, email, password} = req.body

    try{    
        const hashPassword = await bycrypt.hash(password, 12);
        const newUser = new User({userName, email, hashPassword})
        await newUser.save();

        res.status(200).json({
            success: true, message:"registration successful"
        })

    }catch (err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}

//login
const login = async(req, res) =>{
    const {username, email, password} = req.body

    try{

    }catch (err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"some error occured"
        })
    }
}





module.exports = ({registerUser})