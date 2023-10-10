import { Request, Response } from "express"

export const createNewUser = ( req: Request, res: Response ) => {
  try {
    console.log(req.body)
   res.send('Aca se crea el usuario')
        
  } catch (error) {
      res.status(500).send({ message: 'Error'})
  }
}
