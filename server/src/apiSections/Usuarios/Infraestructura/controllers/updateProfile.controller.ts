import { Request, Response } from "express"

export const updateProfile = (req: Request, res: Response) =>{
    try {
        return res.json({messge: 'Aca se actualizan los datos del usuario'})
    } catch (error) {
        res.status(500).send({message: error})
    }
}