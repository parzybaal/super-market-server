import { Request, Response } from "express"
import { productManagerService } from "../../Aplicacion/ProductManagerInstance"

export const getProdById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id

        const product = await productManagerService.getProductById(productId);

        if (product) {
            res.status(200).send(product)
        } else {
            res.status(404).send({ message: 'Producto no encontrado' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor', error });
    }
}