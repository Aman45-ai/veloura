import { Router } from "express";
import reservationApi from "../controllers/reservation.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import createManagerId from "../controllers/admin.controller.js"


const protectedRoutes = Router()

protectedRoutes.post('/reservation', authMiddleware, reservationApi.createReservation)
protectedRoutes.post('/admin/managers', authMiddleware, createManagerId)
protectedRoutes.get('/admin/managers/get-reservations', authMiddleware, reservationApi.getReservationsForManager)
protectedRoutes.patch('/admin/managers/get-reservation/:id', authMiddleware, reservationApi.updateReservationStatus)

export default protectedRoutes