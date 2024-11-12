import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function validateUser(credentials: UserCredentials) {
  const { email, password } = credentials;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: {
      id: true,
      email: true,
      password: true,
      fullName: true,
    },
  });

  if (!user) {
    console.log(`User with email ${email} is not found`);
    return null;
  }

  const isMatch = user && user.password ? await bcrypt.compare(password, user.password) : false;

  if (!isMatch) {
    return null;
  }

  return user;
}
