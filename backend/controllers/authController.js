const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Registrar usuario
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //Verificar si ya esxiste el usuariooo
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Usuario ya registrado" });
        }

        //Hashear contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //crear usuario
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ msg: "Usuario registrado correctamente" });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

//Login de usuarioo =>>>>>>>>>>

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario por email | Verificar usuario y contraseña al mismo tiempo
        const user = await User.findOne({ email });
        const isMatch = user ? await bcrypt.compare(password, user.password) : false;

        if (!user || !isMatch) {
            return res.status(400).json({ msg: "Usuario o contraseña incorrecta" });
        }

        res.status(200).json({
            msg:"Registro exitoso 😎✌️!",
            userId: user._id,
            username: user.username,
        });
    }catch (err) {
        res.status(500).json({msg: err.message});
    }
};

module.exports = {registerUser, loginUser};