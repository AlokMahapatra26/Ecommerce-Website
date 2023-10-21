const app = require("./app");
const connectDatabase = require("./config/database")



//Connection to database
connectDatabase();

app.get("/" , (req , res)=> {
    res.send("Home Page");
})

const port = 3000;
app.listen(port , ()=> {
    console.log(`Server is runnign on PORT ${port}`)
})


//Unhandled Promise Rejection
