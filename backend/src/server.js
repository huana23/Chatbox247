const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const connectDB = require('../config/connectDB');
const routes = require('../routes/index.route');
const userModel = require('../models/user.model');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
connectDB();

routes(app);

app.get('/', (req, res) => {
    return res.json({ message: 'OK', metadata: {message: 'OK'} });
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        succcess: false,
        message: err.message || 'Lỗi Server',
    });
})  



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}); 