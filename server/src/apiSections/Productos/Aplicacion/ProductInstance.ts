import { PrismaClient } from '@prisma/client'
import { PrismaProductRepository } from '../Dominio/products.repository'
import { ProductService } from './services/products.services'

const prisma = new PrismaClient()
const productRepository = new PrismaProductRepository(prisma)
const productService = new ProductService(prisma, productRepository)

export { productService } 