import authApi from "./authApiFlowerConfig";

export async function getProductByCategory(categoryName) {
  const { data } = await authApi.get(`/products/categories/${categoryName}`);
  return data[0].products;
}

export async function getProductsList() {
  const { data } = await authApi.get("/categories");
  return data;
}

export async function searchByApi(q) {
  const response = await authApi.get(`/products?productName=${q}`);
  const data = response?.data;
  return data || [];
}

export async function getProduct() {
  const { data } = await authApi.get("/products?productId");
  return data;
}

export async function oneProductById(id) {
  const response = await authApi.get(`/products/${id}`);
  const data = response?.data;
  return data[0];
}
