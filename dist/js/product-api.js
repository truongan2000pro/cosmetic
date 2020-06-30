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
async function searchProduct(input) {
  let res = await fetch(`${productApiUrl}?search=${input}`);
  let item = await res.json();
  return item;
}
async function deleteProduct(input) {
  let res = await fetch(`${productApiUrl}/${input}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWZiNTVhNDA0YjhjYjNmMWNiMzg1OWIiLCJlbWFpbCI6ImtpbmdkcmFnb243YThAZ21haWwuY29tIiwibmFtZSI6IkFuIiwic3RhdGUiOiJhdmFpbGFibGUiLCJfX3YiOjAsImlhdCI6MTU5MzUyOTgyMiwiZXhwIjoxNTkzNTUxNDIyfQ.KMGh1iMWc-KIDQ73p2T7O3nxM1CHXVWPXfjqBY3c5Ug    ",
    },
  });
  let deletedItem = await res.json();
  return deletedItem;
}
