import { Request, Response } from "express"
import { productManagerService } from "../../Aplicacion/ProductManagerInstance";

export const getAllProductsManager = async ( req: Request, res: Response) => {
    try {
        const { sortName, sortStock, sortPrice, sortOffer } = req.query;
        
        const products = await productManagerService.getAllProducts()

        if (products.length === 0) {
            res.status(404).send({ message: 'No se encontraron productos.' });
        } else {
            res.status(200).send(products);
        }

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error interno del servidor', error })
    }
}