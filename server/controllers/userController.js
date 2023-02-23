const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id, isAdmin) => {
    return jwt.sign({ _id, isAdmin }, process.env.SECRET, { expiresIn: "6h" });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.login(username, password);

        //creating token for user when signing up
        const token = createToken(user._id, user.isAdmin);
        const isAdmin = user.isAdmin;

        res.status(200).json({ username, token, isAdmin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const signupUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userModel.signup(username, password);

        //creating token for user when signing up
        const token = createToken(user._id, false);
        const isAdmin = false;

        res.status(200).json({ username, token, isAdmin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const changeUsername = async (req, res) => {
    const { oldUser, newUser } = req.body;
    try {
        const user = await userModel.findOneAndUpdate(
            { username: oldUser },
            { username: newUser },
            { new: true }
        );
        const token = createToken(user._id, user.isAdmin);

        res.status(200).json({ username: user.username, token, isAdmin: user.isAdmin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const changeUserPassword = async (req, res) => {
    const { username, passwordOld, passwordNew } = req.body;

    try {
        const user = await userModel.changePassword(
            username,
            passwordOld,
            passwordNew
        );

        const token = createToken(user._id, user.isAdmin);

        res.status(200).json({ username, token, isAdmin: user.isAdmin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginUser, signupUser, changeUsername, changeUserPassword };
