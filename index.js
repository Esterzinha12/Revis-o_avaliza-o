const express = require("express");
const app = express();
const route= express.Router();

route.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(route);

app.listen("3000",() =>{
    console.log("localhost:3000");
})