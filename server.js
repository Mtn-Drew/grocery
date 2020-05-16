const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB()

const transactions = require('./routes/transactions')
const groceryItems = require('./routes/groceryItems')
const groceryStores = require('./routes/groceryStores')
const historyItems = require('./routes/historyItems')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use('/api/v1/transactions', transactions)
app.use('/api/v1/groceryItems', groceryItems)
app.use('/api/v1/groceryStores', groceryStores)
app.use('/api/v1/historyItems', historyItems)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  )
)
