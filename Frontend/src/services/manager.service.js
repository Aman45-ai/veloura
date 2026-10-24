import api from "./api"

const managerGetManagerReservationsApi = () => {
    return api.get("/managers/get-reservations")
}

const managerUpdateReservationStatusApi = (id, data) =>{
    return api.patch(`/managers/get-reservation/${id}`, data)
}
export default { managerGetManagerReservationsApi, managerUpdateReservationStatusApi}