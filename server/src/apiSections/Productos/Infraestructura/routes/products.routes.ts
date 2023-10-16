import { Router } from 'express'

import { getAllProducts } from '../controllers/getAllProducts.controller'
import { getProdsByCategory } from '../controllers/getProdsByCategory.controller'
import { getProdById } from '../controllers/getProdById.controller'

const router = Router()

// Listar todos los productos:
router.get('/', getAllProducts)

// Listar por cateogria:
router.get('/category', getProdsByCategory)

// Listar producto en especifico:
router.get('/:id', getProdById)


export default router