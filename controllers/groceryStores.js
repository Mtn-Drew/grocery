const GroceryStore = require('../models/GroceryStore')

//@desc Get all groceryStores
//@route GET /api/v1/groceryStores

exports.getGroceryStores = async (req, res, next) => {
  try {
    const groceryStores = await GroceryStore.find()

    return res.status(200).json({
      success: true,
      count: groceryStores.length,
      data: groceryStores,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

//@desc Add groceryStore
//@route POST /api/v1/groceryStores

exports.addGroceryStore = async (req, res, next) => {
  try {
    const { storeName, description, location } = req.body

    const groceryStore = await GroceryStore.create(req.body)

    return res.status(201).json({
      success: true,
      data: groceryStore,
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

//@desc Delete groceryStore
//@route DELETE /api/v1/groceryStores:id

exports.deleteGroceryStore = async (req, res, next) => {
  try {
    const groceryStore = await GroceryStore.findById(req.params.id)

    if (!groceryStore) {
      return res.status(404).json({
        success: false,
        error: 'No groceryStore found',
      })
    }

    await groceryStore.remove()

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
