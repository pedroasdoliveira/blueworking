import api from "./Api";

export const user = {
    auth: (email: string) => api.post('/sessions', {email})
}