const { Router } = require('express')
const axios = require('axios')
const multer = require('multer')
const multerConfig = require('../api/config/multer')

const {TwingEnvironment, TwingLoaderFilesystem} = require('twing')
let loader = new TwingLoaderFilesystem('./templates')
let twing = new TwingEnvironment(loader)

const router = Router()

// Controllers
const ProductsController = require('../api/controllers/ProductsController')
const ImagesController = require('../api/controllers/ImagesController')

router.get('/images', new ImagesController().getImages)
router.post('/images', multer(multerConfig).single('file'), new ImagesController().saveImage)

router.get('/products', ProductsController.getProducts)
router.get('/products/:id', ProductsController.getProduct)
router.post('/products', ProductsController.createProduct)
router.put('/products/:id', ProductsController.updateProduct)
router.delete('/products/:id', ProductsController.deleteProduct)

router.get('/', async (req, res) => {
  res.end(await twing.render('pages/login.twig', { pageType: 'login' }))
})

router.get('/panel', async (req, res) => {
  res.end(await twing.render('pages/panel.twig', { pageType: 'panel' }))
})

router.get('/panel/products', async (req, res) => {
  axios.get('http://localhost:3333/images')
  .then(async response => {
    const products = response.data
    res.end(await twing.render('pages/manage_products.twig', { products, pageType: 'manage_products' }))
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router