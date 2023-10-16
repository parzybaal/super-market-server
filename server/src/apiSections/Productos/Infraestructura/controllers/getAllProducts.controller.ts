import { Request, Response } from "express"
import { productService } from "../../Aplicacion/ProductInstance"

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts(); 
        if (products.length === 0) {
            res.status(404).send({ message: 'No se encontraron productos.' });
        } else {
            res.status(200).send(products);
        }
        
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send({ error: 'Error al obtener productos' });
    }
}
