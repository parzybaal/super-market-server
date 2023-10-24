import { Request, Response } from "express";
import { productManagerService } from "../../Aplicacion/ProductManagerInstance"

export const getProdByCategory = async (req: Request, res: Response) => {
    try {
        const category = req.params.category

        const products = await productManagerService.getProductCategory(category);

        res.status(200).send(products)
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error interno del servidor', error });
    }
}