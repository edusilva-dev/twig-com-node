const database = require('../models')

class ProductsController {
  static async getProducts(req, res) {
    try {
      const products = await database.Products.findAll()

      return res.status(200).json(products)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getProduct(req, res) {
    const { id } = req.params

    try {
      const product = await database.Products.findOne({ where: Number(id) })

      if (product)
        return res.status(200).json(product)
      else
        return res.status(404).json({ message: 'Product not found.' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createProduct(req, res) {
    const productInfos = req.body

    try {
      const product = await database.Products.create(productInfos)

      return res.status(200).json(product)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params
    const newProductInfos = req.body
    console.log(newProductInfos)

    try {
      await database.Products.update(newProductInfos, { where: { id } })
      const product = await database.Products.findOne({ where: Number(id) })

      return res.status(200).json(product)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params

    try {
      await database.Products.destroy({ where: { id } })

      return res.status(200).json({ message: 'Product has been deleted.' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ProductsController