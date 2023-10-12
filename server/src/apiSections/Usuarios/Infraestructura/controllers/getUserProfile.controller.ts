import { Request, Response } from "express"
import { UserRepository } from "../../Aplicacion/services/users.services"

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const response = await UserRepository.getProfile(id)
    res.status(200).send(response)    
  } catch (error) {
    res.status(500).send(error)
  }
}