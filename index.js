const express = require('express');
const bodyParser = require('body-parser');
const { initDb } = require('./models');
const authRoutes = require('./routes/authRoutes');
const clockInRoutes = require('./routes/clockInRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/api', clockInRoutes); 

const PORT = process.env.PORT || 5000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
