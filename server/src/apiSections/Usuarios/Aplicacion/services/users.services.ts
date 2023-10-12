import { PrismaClient, User as PrismaUser, Prisma } from '@prisma/client';
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

  async createUser(data: Prisma.UserCreateInput): Promise<PrismaUser> {
    const user = await this.userRepository.createUser(data);
    return user;
  }

  async validateEmail(email: string): Promise<PrismaUser | null> {
    const user = await this.userRepository.validateEmail(email)
    return user
  }

  async getProfile(id: string): Promise<PrismaUser | null> {
    const user = await this.userRepository.getProfileById(id);
    return user;
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<PrismaUser> {
    return this.userRepository.updateUser(id, data);
  }

  async deleteUser(id: string): Promise<PrismaUser> {
    return this.userRepository.deleteUser(id);
  }
}

export { UserRepository };