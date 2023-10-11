import { Prisma, PrismaClient } from '@prisma/client';
import { UserRepository } from '../../Dominio/users.repository';

export class UserService {
  private prisma: PrismaClient;
  private userRepository: UserRepository;

  constructor(prisma: PrismaClient, userRepository: UserRepository) {
    this.prisma = prisma;
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userRepository.getUsers();
  }

  async createUser(data: Prisma.UserCreateInput) {
    const user = await this.userRepository.createUser(data);
    return user;
  }

  async getProfile(id: string) {
    const user = await this.userRepository.getProfileById(id);
    return user;
  }

  async updateUser(id: string, data: Prisma.UserCreateInput) {
    return this.userRepository.updateUser(id, data);
  }

  async deleteUser(id: string) {
    return this.userRepository.deleteUser(id);
  }

}

export { UserRepository };
