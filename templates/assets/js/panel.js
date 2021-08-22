(async function init() {
  new Panel().init()
})()

function Panel() {
  const button = document.querySelector('.product_register__card__button')

  this.init = () => {
    button.addEventListener('click', async () => {
      const productInfos = {
        code: document.querySelectorAll('.product_register__card__input')[0].value,
        name: document.querySelectorAll('.product_register__card__input')[1].value,
        price: Number(document.querySelectorAll('.product_register__card__input')[2].value),
        description: document.querySelectorAll('.product_register__card__input')[3].value,
        sku: document.querySelectorAll('.product_register__card__input')[4].value,
        category: document.querySelectorAll('.product_register__card__input')[5].value
      }
      
      axios.post('http://localhost:3333/products', productInfos)
      .then((data) => {
        console.log(data)
        alert('produto criado!')
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }
}