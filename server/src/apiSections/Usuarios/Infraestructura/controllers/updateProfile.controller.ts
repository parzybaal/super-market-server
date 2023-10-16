import { Request, Response } from "express"
import { userService } from "../../Aplicacion/UserInstance"

export const updateProfile = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const updateData = req.body
        
        const data = await userService.updateUser(id, updateData)

        if (data) {
            res.status(200).send({data, messge: 'Datos Actualizados correctamente'})
        } else {
            res.status(404).send({message: 'Usuario no encontrado'})
        }

    } catch (error) {
        res.status(500).send({message: error})
    }
}