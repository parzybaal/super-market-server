import { Request, Response } from "express"
//import { userService } from "../../Aplicacion/instance"

export const resetPassword = (req: Request, res: Response) =>{
    try {
        return res.json({messge: 'Aca se actualizan la contrasena del usuario'})
    } catch (error) {
        res.status(500).send({message: error})
    }
}