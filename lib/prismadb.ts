import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let databaseUrl = process.env.DATABASE_URL;
if (databaseUrl && !databaseUrl.includes("serverSelectionTimeoutMS")) {
  const separator = databaseUrl.includes("?") ? "&" : "?";
  databaseUrl = `${databaseUrl}${separator}serverSelectionTimeoutMS=5000&connectTimeoutMS=5000`;
}

const prismadb =
  globalThis.prisma ||
  new PrismaClient(
    databaseUrl
      ? {
          datasources: {
            db: {
              url: databaseUrl,
            },
          },
        }
      : undefined
  );

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
