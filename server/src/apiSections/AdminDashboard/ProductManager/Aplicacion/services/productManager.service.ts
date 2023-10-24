import { PrismaClient, Product as PrismaProduct} from '@prisma/client'
import { ProductManagerRepository } from '../../Dominio/productManager.repository'

export class ProductManagerService {
    private prisma: PrismaClient
    private productRepository: ProductManagerRepository

    constructor(prisma: PrismaClient, productRespository: ProductManagerRepository){
        this.prisma = prisma;
        this.productRepository = productRespository;
    }

    async getAllProducts() {
        return this.productRepository.getAllProducts()
    }

    async getProductById( id: string): Promise<PrismaProduct | null> {
        const product = await this.productRepository.getProductById(id)
        return product
    }

    async getProductCategory( category: string): Promise<PrismaProduct[]> {
        return this.productRepository.getCategoryProducts(category)
    }
}