import { PrismaClient, Product as PrismaProduct} from '@prisma/client'
import { ProductRespository } from '../../Dominio/products.repository'

export class ProductService {
    private prisma: PrismaClient
    private productRepository: ProductRespository

    constructor(prisma: PrismaClient, productRespository: ProductRespository){
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