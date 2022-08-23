const express = require("express");
const route= express.Router();
const livrosController = require("./livro/livro.controller");

route.use("/livro", livrosController)
module. exports