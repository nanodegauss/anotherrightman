const express = require('express');
const connectDB = require('./config');
const app = express();

// Connecter à la base de données
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/users', require('./routes/users'));
app.use('/api/visuals', require('./routes/visuals'));
app.use('/api/rights-holders', require('./routes/rightsHolders'));
app.use('/api/negotiations', require('./routes/negotiations'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
