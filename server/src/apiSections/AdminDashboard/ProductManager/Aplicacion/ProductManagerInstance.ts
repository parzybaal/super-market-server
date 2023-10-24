import { PrismaClient} from '@prisma/client'
import { PrismaProductManagerRepository } from '../Dominio/productManager.repository'
import { ProductManagerService } from './services/productManager.service'

const prisma = new PrismaClient()
const ProductManagerRepository = new PrismaProductManagerRepository(prisma)
const productManagerService = new ProductManagerService(prisma, ProductManagerRepository)

export { productManagerService }