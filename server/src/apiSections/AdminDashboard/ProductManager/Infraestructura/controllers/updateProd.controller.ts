import { Request, Response } from "express";
import { productManagerService } from "../../Aplicacion/ProductManagerInstance"; // Asegúrate de importar el servicio correcto

export const updateProd = async (req: Request, res: Response) => {
    try {
        const productId = req.params.id
        const updatedProductData = req.body

        const updatedProduct = await productManagerService.updateProduct(productId, updatedProductData)

        if (updatedProduct) {
            res.status(200).send(updatedProduct)
        } else {
            res.status(404).send({ message: 'Producto no encontrado' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor', error })
    }
}