const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const MESSAGES_FILE = path.join(__dirname, 'messages.json');

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!email || !message) return res.status(400).json({ error: 'email and message required' });

  const entry = {
    name: name || null,
    email,
    subject: subject || null,
    message,
    ts: new Date().toISOString(),
  };

  
  let arr = [];
  try {
    if (fs.existsSync(MESSAGES_FILE)) arr = JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
  } catch (err) { console.error('read messages error', err); }

  arr.push(entry);
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(arr, null, 2), 'utf8');
  } catch (err) { console.error('write messages error', err); }

  console.log('Received contact:', entry);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
