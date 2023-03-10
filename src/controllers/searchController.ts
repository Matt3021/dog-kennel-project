import { Request, Response } from "express";

import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createObjectMenu";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string

  if (!query) {
    res.redirect('/')
    return
  }

  let list = Pet.getFromName(query)

  res.render('pages/home', {
    menu: createMenuObject(''),
    list,
    query
  })
}