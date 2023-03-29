
const express=require('express')
const app=require('./app')
const dotenv=require('dotenv')
const ConnectDB=require('./database/db')
const bodyParser=require('body-parser')



//CONFIG
app.use(express.json())
dotenv.config({path:"config/config.env"})
app.use(bodyParser.urlencoded({extended:false}))

//CONNECTING DB
ConnectDB()


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on  port ${process.env.PORT}`)
})

app.get('/',(req,res)=>{
    res.send(
        `
        <h2>${global.z}</h2>
        <h2>${global.y}</h2>
        <h2>${global.x}</h2>

        `
    )
})