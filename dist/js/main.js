window.onload = init;

async function init(e) {
  let listProduct = document.querySelector("#list-product-detail-container");
  let searchInput = document.querySelector("#search");
  let searchBtn = document.querySelector("#search-btn");

  let list = await getListProduct();
  listProduct.innerHTML = ``;
  for (product in list) {
    const { _id, title } = list[product];
    let html = `   <div id="list-product" class="list-product">
    <div class="list-product-detail id-product">${_id}</div>
    <div class="list-product-detail title-product">${title}</div>
    <div class="list-product-detail action-product">update/</div>
    <div id="remove-btn" class="list-product-detail action-product">remove</div>

  </div>
</div>`;
    listProduct.innerHTML += html;
  }
  searchBtn.onclick = async () => {
    let input = searchInput.value;
    let items = await searchProduct(input);
    console.log(items);
    listProduct.innerHTML = ``;
    for (item in items) {
      const { _id, title } = items[item];
      let html = `   <div id="list-product" class="list-product">
                <div class="list-product-detail id-product">${_id}</div>
                <div class="list-product-detail title-product">${title}</div>
                <div class="list-product-detail action-product">update/</div>
                <div id="remove-btn" class="list-product-detail action-product">remove</div>

              </div>
            </div>`;
      listProduct.innerHTML += html;
    }
  };
  for (let i = 0; i < listProduct.children.length; i++) {
    let id = listProduct.children[i].firstElementChild.textContent.toString();
    let lastChild = listProduct.children[i].lastElementChild;
    lastChild.onclick = async () => {
      await deleteProduct(id);
      list = await getListProduct();
      listProduct.innerHTML = ``;
      for (product in list) {
        const { _id, title } = list[product];
        let html = `   <div id="list-product" class="list-product">
        <div class="list-product-detail id-product">${_id}</div>
        <div class="list-product-detail title-product">${title}</div>
        <div class="list-product-detail action-product">update/</div>
        <div id="remove-btn" class="list-product-detail action-product">remove</div>
    
      </div>
    </div>`;
        listProduct.innerHTML += html;
      }
    };
  }
}
// let removeBtn = document.querySelector("#remove-btn");
//     let productId = document.querySelector(".id-product");
//     removeBtn.onclick = async () => {
//       console.log(productId.textContent);
//     };
