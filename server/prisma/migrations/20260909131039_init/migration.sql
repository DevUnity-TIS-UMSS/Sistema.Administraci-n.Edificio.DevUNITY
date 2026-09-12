-- CreateEnum
CREATE TYPE "RolNombre" AS ENUM ('ADMINISTRADOR', 'DIRECTORIO', 'CONSULTA');

-- CreateEnum
CREATE TYPE "TipoInmueble" AS ENUM ('DEPARTAMENTO', 'PARQUEO', 'BAULERA');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "rol" "RolNombre" NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "ultimoLogin" TIMESTAMP(3),
    "copropietarioId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "copropietarios" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "ci" TEXT NOT NULL,
    "email" TEXT,
    "telefono" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "copropietarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inmuebles" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "tipo" "TipoInmueble" NOT NULL,
    "piso" TEXT,
    "areaM2" DECIMAL(8,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inmuebles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ocupante_inmueble" (
    "id" TEXT NOT NULL,
    "inmuebleId" TEXT NOT NULL,
    "copropietarioId" TEXT NOT NULL,
    "esPropietario" BOOLEAN NOT NULL DEFAULT true,
    "fechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMP(3),

    CONSTRAINT "ocupante_inmueble_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historial_auditoria" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT,
    "accion" TEXT NOT NULL,
    "entidad" TEXT NOT NULL,
    "entidadId" TEXT,
    "detalle" JSONB,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historial_auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "copropietarios_ci_key" ON "copropietarios"("ci");

-- CreateIndex
CREATE UNIQUE INDEX "inmuebles_codigo_key" ON "inmuebles"("codigo");

-- CreateIndex
CREATE INDEX "ocupante_inmueble_inmuebleId_idx" ON "ocupante_inmueble"("inmuebleId");

-- CreateIndex
CREATE INDEX "ocupante_inmueble_copropietarioId_idx" ON "ocupante_inmueble"("copropietarioId");

-- CreateIndex
CREATE INDEX "historial_auditoria_entidad_entidadId_idx" ON "historial_auditoria"("entidad", "entidadId");

-- CreateIndex
CREATE INDEX "historial_auditoria_usuarioId_idx" ON "historial_auditoria"("usuarioId");

-- CreateIndex
CREATE INDEX "historial_auditoria_createdAt_idx" ON "historial_auditoria"("createdAt");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_copropietarioId_fkey" FOREIGN KEY ("copropietarioId") REFERENCES "copropietarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ocupante_inmueble" ADD CONSTRAINT "ocupante_inmueble_inmuebleId_fkey" FOREIGN KEY ("inmuebleId") REFERENCES "inmuebles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ocupante_inmueble" ADD CONSTRAINT "ocupante_inmueble_copropietarioId_fkey" FOREIGN KEY ("copropietarioId") REFERENCES "copropietarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_auditoria" ADD CONSTRAINT "historial_auditoria_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
