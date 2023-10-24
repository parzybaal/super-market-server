import { Request, Response } from "express";
import { productManagerService } from "../../Aplicacion/ProductManagerInstance"

export const createProd = async (req: Request, res: Response) => {
    try {
        const newProductData = req.body

        const newProduct = await productManagerService.createProduct(newProductData);

        res.status(201).send(newProduct)

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor', error });
    }
}