import api from './api'

const reservationApi = (data) => {
    return api.post('/reservation',data)
}

const getUserReservationApi = () => {
    return api.get('/user-reservations')
}

export default { reservationApi, getUserReservationApi}