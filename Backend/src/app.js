import express from 'express'
import connectedDB from './db/db.js'
import router from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import protectedRoutes from './routes/protected.routes.js'
import dotenv from 'dotenv'

dotenv.config()


const app = express()

app.use(express.json())
app.use(cookieParser())


app.use(cors({  
origin: process.env.FRONTEND_URL,
credentials: true,
}))

app.use('/auth',router)
app.use('/',protectedRoutes)

connectedDB()

export default app