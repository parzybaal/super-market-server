import { Request, Response } from "express"
import { userService } from "../../Aplicacion/instance"

export const createNewUser = async ( req: Request, res: Response ) => {
  try {
    const userData = req.body

    // Verificar que userData contiene los campos necesarios
    if (!userData.first_name || !userData.email || !userData.last_name ) {
      return res.status(400).send({ message: 'Faltan campos necesarios en la solicitud' });
    }

    // Verificar la existencia de una cuenta con el mismo mail
    const validate = await userService.validateEmail(userData.email)
    console.log('Validate', validate)

    if (validate === null){

      const data = await userService.createUser(userData)
      console.log("data", data)
  
      if(data) {
        res.status(201).send({data, message: 'Usuario creado satisfactoriamente'})
      } else {
        res.status(400).send({message: 'El usuario no pudo crearse, por favor intente mas tarde'})
      }
    } else {
      return res.status(400).send({ message: 'No es posible crear un usuario, ya que el mail se encuentra en uso' });
    }
        
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Error interno del servidor', error })
  }
}
