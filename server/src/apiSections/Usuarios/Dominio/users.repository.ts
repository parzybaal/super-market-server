import { Prisma, PrismaClient, User } from '@prisma/client';

export interface UserRepository {
  getProfileById(id: string): Promise<User>;
  getUsers(): Promise<User[]>;
  createUser(data: Prisma.UserCreateInput): Promise<User>;
  updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User>;
  deleteUser(id: number): Promise<User>;
}

export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaClient) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getProfileById(id: string) {
    return this.prisma.user.find({where: { id } });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}