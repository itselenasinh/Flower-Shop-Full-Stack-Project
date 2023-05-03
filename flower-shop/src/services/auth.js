import authApi from "./authApiFlowerConfig";

export async function login(data) {
  const response = await authApi.post("/auth/login", data);
  return response;
}

export async function signup(data) {
  const response = await authApi.post("/auth/signup", data);
  return response;
}

export async function logout(data) {
  const response = await authApi.post("/auth/logout", data);
  return response;
}


