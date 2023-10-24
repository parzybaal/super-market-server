import { PrismaClient, Product as PrismaProductM } from '@prisma/client'

export interface ProductManagerRepository {
    getAllProducts(): Promise<PrismaProductM[]>
    getProductById(id: string): Promise<PrismaProductM | null>
    getCategoryProducts(category: string): Promise<PrismaProductM[]>
}

export class PrismaProductManagerRepository implements ProductManagerRepository {
    constructor (private prisma : PrismaClient) {}

    async getAllProducts(): Promise<PrismaProductM[]> {
        return this.prisma.product.findMany()
      }
    
      async getProductById(id: string): Promise<PrismaProductM | null> {
        return this.prisma.product.findUnique({ where: { id }})
      }
    
      async getCategoryProducts(category: string): Promise<PrismaProductM[]> {
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