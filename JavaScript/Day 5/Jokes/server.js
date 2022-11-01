import express from 'express'
import jokesRouter from './server/routes/jokes.routes.js';
import "./server/config/mongoose.config.js"
const app = express();
const port = 8000

app.use(express.json(), express.urlencoded({ extended: true }));

const rootRouter = new express.Router()
rootRouter.use("/api/jokes", jokesRouter)
app.use(rootRouter)

app.listen(port, () => console.log(`The server is all fired up on ${port}`));