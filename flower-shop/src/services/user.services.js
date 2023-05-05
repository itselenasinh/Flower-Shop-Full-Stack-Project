import authApi from "./authApiFlowerConfig"

export async function getUserProfile() {
    const {data} = await authApi.get('/profile', {
        headers: {
            token: localStorage.getItem('token')
        }
    });
    return data
}