const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://home-solution.vercel.app'
}));
app.use(express.json()); // Pour parser le JSON
app.use('/', userRoutes);


// Connection à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

// Routes
app.get('/', (req, res) => {
  res.send('Serveur Home Solution en fonctionnement');
});

// Démarrer le serveur
const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
