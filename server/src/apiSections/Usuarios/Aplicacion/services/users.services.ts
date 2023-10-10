import { PrismaClient } from '@prisma/client';
import { UserRepository } from '../../Dominio/users.repositories';

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

  async createUser(data) {
    const user = await this.userRepository.createUser(data);
    return user;
  }

  async updateUser(id, data) {
    return this.userRepository.updateUser(id, data);
  }

}