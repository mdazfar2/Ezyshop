// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Password hashing
  const hashedPassword1 = await bcrypt.hash("password123", 10);
  const hashedPassword2 = await bcrypt.hash("password456", 10);

  // Create users
  const user1 = await prisma.user.create({
    data: {
      mobileNumber: "1234567899",
      name: "John Doe",
      email: "john@examplle.com",
      // passwordHash: hashedPassword1,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      mobileNumber: "0987654322",
      name: "Jane Smith",
      email: "jane@examplee.com",
      // passwordHash: hashedPassword2,
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
