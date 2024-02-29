const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000; // Port auf 5000 geändert

// Statische Dateien im 'public' Verzeichnis hosten
app.use(express.static(path.join(__dirname, 'public')));

// Routenhandler für die Startseite
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API-Endpunkt für das Absenden des Namens
app.post('/submitName', (req, res) => {
  const enteredName = req.body.name.trim();
  if (enteredName === '') {
    res.status(400).json({ error: 'Bitte gib deinen Namen ein.' });
  } else {
    const greetingMessage = `Hallo, ${enteredName}!`;
    res.status(200).json({ message: greetingMessage });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
