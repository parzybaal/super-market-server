import { Request, Response } from "express"

export const getUserProfile = (req: Request, res: Response) => {
  try {
    res.send('Perfil del usuario')    
  } catch (error) {
    res.status(500).send(error)
  }
}