import { PrismaClient, User as PrismaUser, Prisma } from '@prisma/client';

export interface UserRepository {
  getProfileById(id: string): Promise<PrismaUser | null>;
  getUsers(): Promise<PrismaUser[]>;
  createUser(data: Prisma.UserCreateInput): Promise<PrismaUser>;
  validateEmail(userEmail: string): Promise<PrismaUser | null>;
  updateUser(id: string, data: Prisma.UserUpdateInput): Promise<PrismaUser>;
  deleteUser(id: string): Promise<PrismaUser>;
}

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async getUsers(): Promise<PrismaUser[]> {
    return this.prisma.user.findMany();
  }

  async getProfileById(id: string): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<PrismaUser> {
    return this.prisma.user.create({ data });
  }

  async validateEmail(userEmail: string): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique({ where: { email: userEmail }});
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<PrismaUser> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<PrismaUser> {
    return this.prisma.user.delete({ where: { id } });
  }
}
