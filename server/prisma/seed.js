require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const email = "admin@edificioxyz.com";
  const passwordHash = await bcrypt.hash("Admin123!", 10);

  const admin = await prisma.usuario.upsert({
    where: { email },
    update: {},
    create: {
      nombre: "Administrador",
      apellido: "Sistema",
      email,
      passwordHash,
      rol: "ADMINISTRADOR",
    },
  });

  console.log("Usuario administrador listo:", admin.email, "(password: Admin123!)");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
