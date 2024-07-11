const express = require('express');
const bodyParser = require('body-parser');
const { initDb } = require('./models');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
