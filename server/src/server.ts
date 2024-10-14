import express, { Request, Response, NextFunction } from 'express'
import router from './routes/router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { corsOptions } from './utils/utils'
import userRouter from './routes/userRoutes'
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

// app.use('/api', protect, router)
app.use(userRouter)
// app.use(router)

export default app
