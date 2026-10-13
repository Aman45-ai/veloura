import api from './api'

const reservationApi = (data) => {
    return api.post('/reservation',data)
}

export default reservationApi