const app = require("./app");
// const dotenv = require("dotenv");

//Config
// dotenv.config({path:"config/config.env"});
const PORT = 4000; 


app.get("/" , (req , res)=> {
    res.send("Hello Worldd");
})

app.listen(PORT , ()=> {
    console.log(`Server is runnign on PORT ${PORT}`)
})