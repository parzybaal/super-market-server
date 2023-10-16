import { Request, Response } from "express"
import { productService } from "../../Aplicacion/ProductInstance";

export const getProdsByCategory = async (req: Request, res: Response) => {
  try {
    const category = req.params.category
    const products = await productService.getProductCategory(category);

    if (products.length === 0) {
      return res.status(404).send({ message: 'No se encontraron productos en esta categoría' });
    }

    res.status(200).send(products);
  } catch (error) {
    console.error('Error al obtener productos por categoría:', error);
    res.status(500).send({ error: 'Error al obtener productos por categoría' });
  }
}
