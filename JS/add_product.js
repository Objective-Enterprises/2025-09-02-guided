const form = document.getElementById('productForm')
const name = document.getElementById('pname')
const price = document.getElementById('price')
const quantity = document.getElementById('units')
const description = document.getElementById('desc')
const isAvailable = document.getElementById('instock')
const category = document.getElementById('category')
const image = document.getElementById('prodimg')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const product = {
    name: name.value,
    price: price.value,
    quantity: quantity.value,
    description: description.value,
    isAvailable: isAvailable.checked ? 'Yes' : 'No',
    category: category.value,
    image: image.value
  }
  const body = JSON.stringify(product)
  const init = { method: 'POST', body }
  await fetch('http://localhost:3000/products', init)
  form.reset()
  window.location.href = './list_products.html'
})