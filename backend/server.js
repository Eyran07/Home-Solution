const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Pour parser le JSON
app.use('/login', authRoutes);

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
