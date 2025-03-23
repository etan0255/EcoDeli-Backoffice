const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database.js');
const userRoutes = require('./routes/userRoutes.js');
const paymentRoutes = require('./routes/paymentRoutes.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/payments', paymentRoutes);

sequelize.sync().then(() => console.log("Database connected"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


