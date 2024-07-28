import express, { Express, Request, Response } from "express";
import path from "path";
import router from "./routes/router";

const app: Express = express();
app.use('', router)

app.listen(7777, ()=>{
    console.log('http://localhost:7777')

})
