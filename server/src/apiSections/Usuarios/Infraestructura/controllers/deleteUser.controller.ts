import { Request, Response } from "express"
import { userService } from "../../Aplicacion/instance"

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = await userService.deleteUser(id)

    if (data) {
        res.status(200).send({data, message: 'Usuario eliminado correctamente' })    
    } else {
        res.status(404).send({message: 'Usuario no encontrado'})
    }
  } catch (error) {
    res.status(500).send(error)
  }
}