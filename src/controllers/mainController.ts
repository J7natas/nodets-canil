import { Request, Response } from "express";

export const Home = (req:Request, res:Response) => {
    res.send('Pagina home');
}

export const Dogs = (req:Request, res:Response) => {
    res.send('pagina de cahorros');
}

export const Cats = (req:Request, res:Response) => {
    res.send('pagina de gatos');
}

export const Fish = (req:Request, res:Response) => {
    res.send('pagina de peixes');
}