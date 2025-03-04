const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const connectdb = require('./config/db')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/api',userRoutes)

app.get('/ping',(req,res)=>{
    res.send('pong')
})

app.listen(port,async()=>{
    try{
        await connectdb()
        console.log(`Server is running on http://localhost:${port}`)
    }catch(error){
        console.error(error.message)
    }
    
})