const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { username, text } = req.body;
  const newMessage = { id: messages.length + 1, username, text };
  messages.push(newMessage);
  res.json(newMessage);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `サーバが起動しました： http://localhost:${process.env.PORT || 3000}`,
  );
});