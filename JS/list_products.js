/*
<th width="8%">Product No.</th>
<th width="10%">Product Name</th>
<th width="8%">Product Price</th>
<th width="50%">Product Description</th>
<th width="10%">Units</th>
<th>Product Category</th>
<th>Available?</th>
<th>Product Image</th>
<th>Action</th>
*/

const tbody = document.querySelector('tbody')

async function download () {
  const response = await fetch('http://localhost:3000/products')
  const data = await response.json()
  for (const product of data) {
    tbody.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>${product.description}</td>
        <td>${product.quantity}</td>
        <td>${product.category}</td>
        <td>${product.isAvailable}</td>
        <td>
          <img src="${product.image}" width="30" height="30" />
        </td>
        <td></td>
      </tr>
    `
  }
}
download()