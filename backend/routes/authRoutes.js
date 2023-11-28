const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        console.log(typeof user.password, user.password);
        if (!user) {
            return res.status(401).json({ message: "Nom d'utilisateur introuvable" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur du serveur" });
    }
});


module.exports = router;
