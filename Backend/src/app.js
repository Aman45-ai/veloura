import express from 'express'
import connectedDB from './db/db.js'
import router from './routes/auth.routes.js'

const app = express()

app.use(express.json())

app.use('/auth',router)


connectedDB()

export default app