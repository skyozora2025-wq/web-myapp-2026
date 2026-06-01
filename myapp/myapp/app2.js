const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.post('/api/schedules', (req, res) => {

  const { title, date, time } = req.body;

  const newSchedule = {
    id: 1,
    title,
    date,
    time
  };

  console.log(newSchedule);

  res.json(newSchedule);
});

app.listen(3000, () => {
  console.log('Server Start');
});