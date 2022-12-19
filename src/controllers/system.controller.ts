import { Request, Response } from "express";
export class SystemController {
      
    public sendApiDocument = (_: Request, res: Response)=> {
      return res.status(301).redirect('/docs');
    }
}