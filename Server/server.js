require('dotenv').config();
const express = require('express');
const app = express();
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/service-router')
const errorMiddleware = require('./middleware/error-middleware')
const cors = require('cors')

const connectDb = require('./utils/db');
const services = require('./controllers/service-controller');

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true
}

app.use(cors(corsOption));
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/form', contactRoute)
app.use('/api/data', services);
app.use(errorMiddleware);




const PORT = 7000
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Running at Port ${PORT}`);
    })
})


