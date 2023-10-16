import { Request, Response } from "express"
import { productService } from "../../Aplicacion/ProductInstance"

export const getProdById = async (req: Request, res: Response) => {
   try {
    const productId = req.params.id; 

    const product = await productService.getProductById(productId);

    if (!product) {
      return res.status(404).send({ message: 'Producto no encontrado' });
    }

    res.status(200).send(product);
   } catch (error) {
    console.error('Error al obtener el producto por ID:', error);
    res.status(500).send({ error: 'Error al obtener el producto por ID' });
   }
}
