import { Router } from "express";
import reservationApi from "../controllers/reservation.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import createManagerId from "../controllers/admin.controller.js"
import requireRole from "../middleware/requireRole.middleware.js";


const protectedRoutes = Router()

protectedRoutes.post('/reservation', authMiddleware, requireRole("user"), reservationApi.createReservation)
protectedRoutes.get('/user-reservations', authMiddleware, requireRole("user"),  reservationApi.getReservationForUser)
protectedRoutes.patch('/user/cancel-reservation/:id', authMiddleware, requireRole("user"),  reservationApi.cancelReservation)
protectedRoutes.post('/admin/managers', authMiddleware, requireRole("admin"), createManagerId)
protectedRoutes.get('/managers/get-reservations', authMiddleware, requireRole("manager"), reservationApi.getReservationsForManager)
protectedRoutes.patch('/managers/get-reservation/:id', authMiddleware, requireRole("manager"), reservationApi.updateReservationStatus)

export default protectedRoutes