import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function resetDb() {
  await prisma.request.deleteMany();
}
