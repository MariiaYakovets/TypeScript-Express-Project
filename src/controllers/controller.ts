import { Express, Request, Response } from "express";
import path from "path";
import html from "../templates";

function getMain(req:Request, res: Response){
    res.send(html("ajcsjc"))
}

export default getMain