const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
    const { name, email, password, picture } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400);
            throw new Error("User Already Exists");
        }

        const user = await User.create({
            name,
            email,
            password,
            picture,
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                password: user.password,
                picture: user.picture,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Error Occurred!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'User Already Exists' });
    }
};

const authUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                token: generateToken(user._id),

            });
        } else {
            res.status(400).json("Invalid Email Or Password!");
        };

};


module.exports = { registerUser, authUser };
