const app = require("../backend/app");
const connectDatabase = require("./database/database");
require('dotenv').config();

//Connecting Database
connectDatabase()

app.get("/" , (req,res)=>{
    res.send("Hello World")
})

const port = process.env.PORT;
console.log(port)
app.listen(port , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})