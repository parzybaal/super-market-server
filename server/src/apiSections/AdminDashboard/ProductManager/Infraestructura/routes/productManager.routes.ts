import { Router } from 'express'

import { getAllProductsManager } from '../controllers/getAllProducts.controller'

const router = Router()

// Listado de productos
router.get('/all', getAllProductsManager)
router.get('/:id', getProdById)
router.get('/:category', getProdByCategory)
//router.get('/')

export default router