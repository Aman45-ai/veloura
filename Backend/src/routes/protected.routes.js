import { Router } from "express";
import createReservation from "../controllers/reservation.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const protectedRoutes = Router()

protectedRoutes.post('/reservation', authMiddleware, createReservation)

export default protectedRoutes