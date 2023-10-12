import { PrismaClient } from '@prisma/client';
import { PrismaUserRepository } from '../Dominio/users.repository';
import { UserService } from './services/users.services';

const prisma = new PrismaClient();
const userRepository = new PrismaUserRepository(prisma);
const userService = new UserService(prisma, userRepository);

export { userService };