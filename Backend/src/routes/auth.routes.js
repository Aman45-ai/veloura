import authController from '../controllers/auth.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/sign-up',authController.signup)
router.post('/login',authController.login)
router.post("/logout", authController.logout)


export default router
