import { configDotenv } from "dotenv"

configDotenv()

const config = {
    MONGO_URI:process.env.MONGO_URI,
    ACCESS_JWT_SECRET:process.env.ACCESS_SECRET,
    REFRESH_JWT_SECRET:process.env.REFRESH_SECRET
}

export default config