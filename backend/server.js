const app = require("../backend/app");
const connectDatabase = require("./database/database");


//Connecting Database
connectDatabase()

app.get("/" , (req,res)=>{
    res.send("Hello World")
})

const port = 3000; 
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})