import { PrismaClient, Product as PrismaProductM } from '@prisma/client'

export interface ProductManagerRepository {
    getAllProducts(): Promise<PrismaProductM[]>
    getProductById(id: string): Promise<PrismaProductM | null>
    getCategoryProducts(category: string): Promise<PrismaProductM[]>
    createProduct(newProd: PrismaProductM): Promise<PrismaProductM>
    updateProduct(id: string, updatedProductData: PrismaProductM): Promise<PrismaProductM | null>
    deleteProduct(id: string): Promise<boolean>;
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

      async createProduct(newProd: PrismaProductM): Promise<PrismaProductM> {
        return this.prisma.product.create({ data: newProd });
    }

    async updateProduct(id: string, updatedProductData: PrismaProductM): Promise<PrismaProductM | null> {
        const updatedProduct = await this.prisma.product.update({
            where: { id },
            data: updatedProductData,
        });

        return updatedProduct;
    }

    async deleteProduct(id: string): Promise<boolean> {
        await this.prisma.product.delete({
            where: { id },
        });
    
        return true
    }
}