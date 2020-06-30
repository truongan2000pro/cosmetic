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
    <div class="list-product-detail action-product">update,remove</div>
  </div>
</div>`;
    listProduct.innerHTML += html;
  }
  searchBtn.onclick = async () => {
    let input = searchInput.value;
    let items = await searchProduct(input);
    listProduct.innerHTML = ``;
    if (items.length > 1) {
      for (item in items) {
        const { _id, title } = list[item];
        let html = `   <div id="list-product" class="list-product">
                <div class="list-product-detail id-product">${_id}</div>
                <div class="list-product-detail title-product">${title}</div>
                <div class="list-product-detail action-product">update,remove</div>
              </div>
            </div>`;
        listProduct.innerHTML += html;
      }
    } else {
      const { _id, title } = list[parseInt(input) - 1];
      let html = `   <div id="list-product" class="list-product">
            <div class="list-product-detail id-product">${_id}</div>
            <div class="list-product-detail title-product">${title}</div>
            <div class="list-product-detail action-product">update,remove</div>
          </div>
        </div>`;
      listProduct.innerHTML += html;
    }
  };
}
