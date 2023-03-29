
const express=require('express')
const app=express()
const dotenv=require('dotenv')
const ProductRoute=require('./routes/ProductRoutes')
// const bodyParser=require('body-parser')


app.use(express.json())

app.use('/api/v1',ProductRoute)



module.exports=app