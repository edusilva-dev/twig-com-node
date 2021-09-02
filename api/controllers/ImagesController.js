const database = require('../models')

function ImagesController() {
  this.getImages = async (req, res) => {
    try {
      const images = await database.Images.findAll()
      console.log(images)

      return res.status(200).json(images)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  this.saveImage = async (req, res) => {
    const { originalname: file, size, filename: key } = req.file
    const url = '..' + req.file.path.split('/templates')[1]
    const newImage = { 
      file: file,
      size: size,
      key: key,
      url: url
    }

    try {
      const image = await database.Images.create(newImage)

      return res.status(200).json(image)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ImagesController