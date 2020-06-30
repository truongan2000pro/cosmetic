window.onload = init;

async function init(e) {
  let listProduct = document.querySelector("#list-product-detail-container");
  let searchInput = document.querySelector("#search");
  let searchBtn = document.querySelector("#search-btn");
  // get full products
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
  // search Button event onclick
  searchBtn.onclick = async () => {
    let input = searchInput.value;
    let items = await searchProduct(input);
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
  // add onclick event to remove button
  for (let i = 0; i < listProduct.children.length; i++) {
    let id = listProduct.children[i].firstElementChild.textContent.toString(); //  id is the first child so we get the textcontent
    let lastChild = listProduct.children[i].lastElementChild; // lastchild is remove button
    lastChild.onclick = async () => {
      await deleteProduct(id); // call deleteProduct funtion to delete a product with an id
      list = await getListProduct(); // after delete get all products back!
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
