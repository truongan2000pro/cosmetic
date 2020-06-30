window.onload = init;

async function init(e) {
  let listProduct = document.querySelector("#list-product-detail-container");
  let list = await getListProduct();
  for (product in list) {
    const { _id, title } = list[product];
    console.log(_id, title);
    let html = `   <div id="list-product" class="list-product">
    <div class="list-product-detail id-product">${_id}</div>
    <div class="list-product-detail title-product">${title}</div>
    <div class="list-product-detail action-product">update,remove</div>
  </div>
</div>`;
    listProduct.innerHTML += html;
  }
}
