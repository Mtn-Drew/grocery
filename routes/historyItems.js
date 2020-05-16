const express = require('express')
const router = express.Router()

const {
  getHistoryItems,
  addItemToHistory,
  deleteItemFromHistory,
} = require('../controllers/historyItems')

router.route('/').get(getHistoryItems).post(addItemToHistory)

router.route('/:id').delete(deleteItemFromHistory)

module.exports = router
