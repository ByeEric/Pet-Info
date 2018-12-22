const express = require('express');
const bodyParser = require('body-parser');
const model = require('../database/models/Pet_Info.js');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/info', (req, res) => {
  // extract pet_id from request
  let pet_id = req.headers.pet_id
  console.log('req in service GET: ', req.headers.pet_id)

  // call model.getPetById(pet_id);
  model.getPetById(pet_id, petInfo => {
    // send response with pet info to client
    // console.log('PET INFO IN SERVICE GET: ', petInfo)
    res.status(200).send(petInfo)
  })
})

const port = process.env.PORT || 3000

let server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = server