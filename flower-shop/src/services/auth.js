import authApi from "./authApiFlowerConfig";

export async function login(data) {
  const response = await authApi.post("/auth/login", data);
  return response;
}

export async function signup(data) {
  const response = await authApi.post("/auth/signup", data);
  return response;
}

export async function getProductByCategory(categoryName) {
  console.log(categoryName)
  const { data } = await authApi.get(`/products/categories/${categoryName}`);
  return data[0].products;
}

export async function getProductsList() {
  const { data } = await authApi.get("/categories");
  return data;
}
