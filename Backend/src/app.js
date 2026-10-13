import express from 'express'
import connectedDB from './db/db.js'
import router from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import protectedRoutes from './routes/protected.routes.js'


const app = express()

app.use(express.json())
app.use(cookieParser())


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/auth',router)
app.use('/',protectedRoutes)

connectedDB()

export default app