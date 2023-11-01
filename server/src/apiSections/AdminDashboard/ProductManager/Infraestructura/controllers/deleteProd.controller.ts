import { Request, Response } from "express"
import { productManagerService } from '../../Aplicacion/ProductManagerInstance'

export const deleteProd = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id

        const deleted = await productManagerService.deleteProduct(productId);

        if (deleted) {
            res.status(204).send()
        } else {
            res.status(404).send({ message: 'Producto no encontrado' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor', error });
    }
}