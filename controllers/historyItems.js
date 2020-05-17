const HistoryItem = require('../models/HistoryItem')

//@desc Get all history items
//@route GET /api/v1/historyItems
//@access Public

exports.getHistoryItems = async (req, res, next) => {
  try {
    const historyItems = await HistoryItem.find()

    return res.status(200).json({
      success: true,
      count: historyItems.length,
      data: historyItems,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

//@desc Add history item
//@route POST /api/v1/historyItems
//@access Public

exports.addItemToHistory = async (req, res, next) => {
  try {
    const {
      groceryItemName,
      storeName,
      groceryItemDescription,
      groceryItemAisle,
      lastPurchased,
    } = req.body

    const historyItem = await HistoryItem.create(req.body)

    return res.status(201).json({
      success: true,
      data: historyItem,
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        error: messages,
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      })
    }
  }
}

//@desc Delete history item
//@route DELETE /api/v1/historyItems:id
//@access Public

exports.deleteItemFromHistory = async (req, res, next) => {
  try {
    const historyItem = await HistoryItem.findById(req.params.id)

    if (!historyItem) {
      return res.status(404).json({
        success: false,
        error: 'No history item found',
      })
    }

    await historyItem.remove()

    return res.status(204).json({
      success: true,
      data: {},
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}
