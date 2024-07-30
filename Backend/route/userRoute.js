const userRouter = require("express").Router();
const   User   = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

userRouter.post("/register", async (req, res) =>{
    const {name, email, password, role} = req.body;

    try {
            let user = await User.findOne({email});
            if(user) return res.status(400).json({message: "User already exists"});
            bcrypt.hash(password, 10, async (err, hash) => {
                if(err) return res.status(500).json({message: err.message});
                user = new User({
                    name,
                    email,
                    password: hash,
                    role
                })
                await user.save();
                res.status(200).json({message: "User created successfully" , user})
            
            })  
    } catch (error) {
        res.status(500).json({message: error.message})
    } 
})


userRouter.post("/login", async (req, res) =>{
    const {email, password} = req.body;
    try {
            let user = await User.findOne({email});
            if(!user) return res.status(400).json({message: "User does not exist"});
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) return res.status(400).json({message: err.message});
                if(!result) return res.status(400).json({message: "Invalid credentials"});
                jwt.sign({...user}, process.env.SECRET_KEY, (err, token) => {
                    if(err) return res.status(400).json({message: err.message});

                    res.status(200).json({message: "Login successful", token, user: user})
                })
            })   
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})




module.exports = userRouter