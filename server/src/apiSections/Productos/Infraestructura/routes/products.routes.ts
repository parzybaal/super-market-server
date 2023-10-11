import { Router } from 'express'

import { getAllProducts } from '../controllers/getAllProducts.controller'
import { getProdsByCategoy } from '../controllers/getProdsByCategoy.controller'
import { getProdById } from '../controllers/getProdById.controller'

const router = Router()

// Listar todos los productos:
router.get('', getAllProducts)

// Listar por cateogria:
router.get('', getProdsByCategoy)

// Listar producto en especifico:
router.get('', getProdById)


export default router