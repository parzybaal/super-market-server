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

    async createProduct(newProduct: PrismaProduct): Promise<PrismaProduct> {
        return this.productRepository.createProduct(newProduct);
    }
    
    async updateProduct(id: string, updatedProduct: PrismaProduct): Promise<PrismaProduct | null> {
        const existingProduct = await this.productRepository.getProductById(id);
    
        if (!existingProduct) {
            return null; // El producto no existe, puedes manejar el error como prefieras
        }
    
        const updated = await this.productRepository.updateProduct(id, updatedProduct);
        return updated;
    }
    
    async deleteProduct(id: string): Promise<boolean> {
        const existingProduct = await this.productRepository.getProductById(id);
    
        if (!existingProduct) {
            return false; // El producto no existe, puedes manejar el error como prefieras
        }
    
        const deleted = await this.productRepository.deleteProduct(id);
    
        return deleted;
    }
}