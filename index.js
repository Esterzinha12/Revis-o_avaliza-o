const express = require("express");
const app = express();
const route= express.Router();
const routes = require("./api/route");

route.get("/", (req, res) => {
    res.send("Hello World!");
});

route.use(routes);
app.use(route);

app.listen("3000",() =>{
    console.log("localhost:3000");
});