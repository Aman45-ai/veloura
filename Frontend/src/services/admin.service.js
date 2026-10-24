import api from "./api";

const adminCreateManagerAccountApi = (data) => {
    return api.post("/admin/managers", data)
}


export default { adminCreateManagerAccountApi }