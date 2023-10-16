import { PrismaClient, Product as PrismaProduct} from '@prisma/client'

export interface ProductRespository {
    getAllProducts(): Promise<PrismaProduct[]>
    getProductById(id: string): Promise<PrismaProduct | null>
    getCategoryProducts(category: string): Promise<PrismaProduct[]>
}

export class PrismaProductRepository implements ProductRespository {
    constructor(private prisma: PrismaClient) {}
    
  async getAllProducts(): Promise<PrismaProduct[]> {
    return this.prisma.product.findMany()
  }

  async getProductById(id: string): Promise<PrismaProduct | null> {
    return this.prisma.product.findUnique({ where: { id }})
  }

  async getCategoryProducts(category: string): Promise<PrismaProduct[]> {
    return this.prisma.product.findMany({
        where: {
            categories: {
                some: {
                    category: {
                        name: category
                    }
                }
            }
        }
    });
  }
}