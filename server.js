const express = require('express');
const path = require('path');
const app = express();

// Port du serveur (Render/Heroku utilisent process.env.PORT)
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques du dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🍪 Cookie Clicker est en ligne sur http://localhost:${PORT}`);
    console.log(`📊 Serveur démarré avec succès !`);
});
