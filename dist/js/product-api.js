const baseUrl = "/api";
const productApiUrl = `${baseUrl}/product`;

async function getListProduct() {
  let res = await fetch("http://localhost:9000/api/product");
  let list = await res.json();
  return list;
}

async function createProduct(data) {
  let res = await fetch(productApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let newProduct = await res.json();
  return newProduct;
}
async function searchProduct(id) {
  let res = await fetch(`${productApiUrl}/${id}`);
  let item = await res.json();
  console.log(item);
  return item;
}
