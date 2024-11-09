import express, { Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { corsOptions } from './utils/utils'
import userRouter from './routes/userRoutes'
import imageRouter from './routes/imageRoutes'
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsOptions))
app.use('/api', imageRouter)
app.use('/api', userRouter)
export default app
