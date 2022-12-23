const data = require('../data.json');
 
const productData = (req, res) => {
    return  res.status(200).json(data);
}
  
  // exportamos las acciones
  module.exports = {
        productData
  }