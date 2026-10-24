import authController from '../controllers/auth.controller.js'
import { Router } from 'express'
import authMiddleware from '../middleware/auth.middleware.js'

const router = Router()

router.post('/sign-up',authController.signup)
router.post('/login', authController.login)
router.post("/logout", authMiddleware, authController.logout)
router.post("/refresh", authController.newToken)


export default router
