import express from 'express'
import cors from 'cors'
import moviesRouter from './routes/movies.routes.js';
import './config/mongoose.config.js'

const app = express();
const port = 8000

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())

const rootRouter = new express.Router()
rootRouter.use("/api", moviesRouter)
app.use(rootRouter)

app.listen(port, () => console.log(`The server is all fired up on ${port}`));