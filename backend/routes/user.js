const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(401).json({ message: "Nom d'utilisateur introuvable" });
        }

        if (user.password !== password) {
            console.log("Admin Status:", user);
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, admin: user.admin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur du serveur" });
    }
});

// Route pour créer un nouvel utilisateur
router.post('/users', async (req, res) => {
    try {
        const { name, password, admin } = req.body;

        // Création du nouvel utilisateur
        const newUser = new User({
            name,
            password, // Utilisez le mot de passe haché
            admin
        });

        await newUser.save(); // Enregistrement de l'utilisateur dans la base de données

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création de l’utilisateur' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        res.status(500).json({ message: 'Erreur du serveur' });
    }
});

router.put('/users/:id', async (req, res) => {
    const { name, password, admin } = req.body;
    const userId = req.params.id;

    try {
        const updatedData = { name, password, admin }; // Plus de hachage de mot de passe

        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.json({ message: 'Utilisateur mis à jour', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l’utilisateur' });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l’utilisateur' });
    }
});


module.exports = router;