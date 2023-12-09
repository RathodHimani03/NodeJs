
const express = require('express')
const bodyParse = require('body-parser')
const adminRoutes = require('./Routes/admin')
const shopRouter = require('./Routes/shop')

const app = express()
app.use(bodyParse.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRouter)





app.listen(3000)