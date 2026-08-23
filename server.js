const dns = require('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

const studentRoutes = require('./routes/studentRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const facultyRoutes = require('./routes/facultyRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/faculty', facultyRoutes);

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Smart Campus Backend is live on port 3000!"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
    console.log(`👉 Access your API locally at: http://localhost:${PORT}`);
});