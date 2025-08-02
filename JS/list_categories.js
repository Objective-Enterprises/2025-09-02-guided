const tbody = document.querySelector('tbody')

async function download () {
  const response = await fetch('http://localhost:3000/categories')
  const data = await response.json()
  for (const category of data) {
    tbody.innerHTML += `
      <tr>
        <td>${category.id}</td>
        <td>${category.name}</td>
        <td>${category.description}</td>
        <td>${category.isActive}</td>
        <td></td>
      </tr>
    `
  }
}
download()