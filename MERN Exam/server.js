import express from 'express'
import cors from 'cors'
import piratesRouter from './server/routes/pirates.routes.js';
import "./server/config/mongoose.config.js"
import * as dotenv from 'dotenv'
const app = express();
const port = 8000

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())
dotenv.config()

const rootRouter = new express.Router()
rootRouter.use("/api", piratesRouter)
app.use(rootRouter)

app.listen(port, () => console.log(`The server is all fired up on ${port}`));

require('dotenv').config();

const myFirstSecret = process.env.FIRST_SECRET_KEY;


