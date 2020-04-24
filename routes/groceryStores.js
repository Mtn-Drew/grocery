const express = require('express')
const router = express.Router()

const {
  getGroceryStores,
  addGroceryStore,
  deleteGroceryStore,
} = require('../controllers/groceryStores')

router.route('/').get(getGroceryStores).post(addGroceryStore)

router.route('/:id').delete(deleteGroceryStore)

module.exports = router
