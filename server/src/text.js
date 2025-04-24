// server/src/test.js
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('Prisma Client connected!');
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();