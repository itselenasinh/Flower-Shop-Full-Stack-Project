import authApi from "./authApiFlowerConfig";

export async function getProductByCategory(categoryName) {
  console.log(categoryName);
  const { data } = await authApi.get(`/products/categories/${categoryName}`);
  return data[0].products;
}

export async function getProductsList() {
  const { data } = await authApi.get("/categories");
  return data;
}

// export async function searchByApi(q) {
//   const {data} = await authApi.get()
// }
export async function getProducts()  {
  const { data } = await authApi.get("/products");
  return data
}
