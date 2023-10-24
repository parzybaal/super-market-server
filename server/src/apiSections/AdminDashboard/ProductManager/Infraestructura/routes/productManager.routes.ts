import { Router } from 'express'

import { getAllProductsManager } from '../controllers/getAllProducts.controller'
import { getProdById } from '../controllers/getProdById.controllers'
import { getProdByCategory } from '../controllers/getProdByCategory.controller'

import { createProd } from '../controllers/createProd.controller'
import { updateProd } from '../controllers/updateProd.controller'
import { deleteProd } from '../controllers/deleteProd.controller'

const router = Router()

// Listado de productos
router.get('/all', getAllProductsManager)
router.get('/:id', getProdById)
router.get('/:category', getProdByCategory)
//router.get('/')

// Gestion de productos
router.post('/createprod', createProd)
router.put('/updateproduct/:id', updateProd)
router.delete('/delete/:id', deleteProd)

export default router