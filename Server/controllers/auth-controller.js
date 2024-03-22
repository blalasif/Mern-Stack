const User = require("../models/userModel");

// *------------------------------
// Home Logic 📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝
// *------------------------------
const home = async (req, res) => {
    try {
        res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
        console.log(error);
    }
};

// *------------------------------

//* User Registration Logic 📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝    
const register = async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });
        res.status(201).json({
            msg: "Registration Successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        next(error)
    }
};




//login api
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email })

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        const user = await userExist.comparePassword(password)
        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else {
            res.status(401).json({ message: "Invalid Email or Password" })
        }
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
}

// search user with username 

const getUser = async (req, res) => {

    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User Not Found" })
        }
        else {
            return res.status(200).json({ user })

        }
    } catch (error) {
        console.log(error);
    }
}



//User Logic
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        res.status(200).json({ userData })



    } catch (error) {
        console.log(error);
    }
}




module.exports = { register, home, login, getUser, user }
