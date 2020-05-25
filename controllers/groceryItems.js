const GroceryItem = require('../models/GroceryItem')

//@desc Get all groceryItems
//@route GET /api/v1/groceryItems
//@access Public
exports.getGroceryItems = async (req, res, next) => {
  try {
    const groceryItems = await GroceryItem.find()

    return res.status(200).json({
      success: true,
      count: groceryItems.length,
      data: groceryItems,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}

//@desc Add groceryItem
//@route POST /api/v1/groceryItems
//@access Public
exports.addGroceryItem = async (req, res, next) => {
  try {
    const {
      itemName,
      description,
      aisle,
      defaultStore,
      expectedFrequency,
      checked,
    } = req.body

    const groceryItem = await GroceryItem.create(req.body)

    return res.status(201).json({
      success: true,
      data: groceryItem,
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

//@desc Delete groceryItem
//@route DELETE /api/v1/groceryItems:id
//@access Public
exports.deleteGroceryItem = async (req, res, next) => {
  try {
    const groceryItem = await GroceryItem.findById(req.params.id)

    if (!groceryItem) {
      return res.status(404).json({
        success: false,
        error: 'No groceryItem found',
      })
    }

    await groceryItem.remove()

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


//@desc Update groceryItem
//@route PUT /api/v1/groceryItems:id
//@access Public
exports.updateGroceryItem = async (req, res, next) => {
  try {
    const groceryItem = await GroceryItem.findByIdAndUpdate(req.params.id, req.body,{new:true,useFindAndModify:false})

    if (!groceryItem) {
      return res.status(404).json({
        success: false,
        error: 'No groceryItem found',
      })
    }

    return res.status(200).json({
      success: true,
      data: {groceryItem},
    })
  } catch (error) {
    console.log('---err--- ', error)
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    })
  }
}