import { Request, Response } from "express"
import { userService } from "../../Aplicacion/UserInstance"

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await userService.getProfile(id)

    if (data) {
      res.status(200).send({data, message: 'Usuario encontrado'})
    } else {
      res.status(404).send({message: 'Usuario no encontrado'})
    }

  } catch (error) {
    res.status(500).send(error)
  }
}