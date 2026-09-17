import authController from '../controllers/auth.controller.js'
import { Router } from 'express'

const router = Router()

router.post('/sign-up',authController.signup)
router.post('/login',authController.login)

export default router
