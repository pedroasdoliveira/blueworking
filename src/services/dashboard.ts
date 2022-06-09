import api from "./Api";

export const dashboard = {
    spotList: (user_id: string) => api.get('/dashboard', {
        headers: {user_id}
    })
}