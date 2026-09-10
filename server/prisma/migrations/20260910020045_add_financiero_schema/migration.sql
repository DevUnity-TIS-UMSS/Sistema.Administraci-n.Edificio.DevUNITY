-- CreateEnum
CREATE TYPE "EstadoExpensa" AS ENUM ('PENDIENTE', 'PARCIAL', 'PAGADA', 'VENCIDA');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('EFECTIVO', 'TRANSFERENCIA', 'TARJETA', 'CHEQUE');

-- CreateEnum
CREATE TYPE "TipoMovimiento" AS ENUM ('INGRESO', 'EGRESO');

-- CreateTable
CREATE TABLE "expensas" (
    "id" TEXT NOT NULL,
    "inmuebleId" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "montoTotal" DECIMAL(10,2) NOT NULL,
    "estado" "EstadoExpensa" NOT NULL DEFAULT 'PENDIENTE',
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "expensas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos" (
    "id" TEXT NOT NULL,
    "expensaId" TEXT NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "metodoPago" "MetodoPago" NOT NULL,
    "referencia" TEXT,
    "fechaPago" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registradoPorId" TEXT,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimientos_financieros" (
    "id" TEXT NOT NULL,
    "tipo" "TipoMovimiento" NOT NULL,
    "categoria" TEXT NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "descripcion" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registradoPorId" TEXT,

    CONSTRAINT "movimientos_financieros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cuentas_bancarias" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "banco" TEXT NOT NULL,
    "numeroCuenta" TEXT NOT NULL,
    "saldoActual" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cuentas_bancarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimientos_caja" (
    "id" TEXT NOT NULL,
    "cuentaId" TEXT NOT NULL,
    "tipo" "TipoMovimiento" NOT NULL,
    "monto" DECIMAL(12,2) NOT NULL,
    "concepto" TEXT NOT NULL,
    "conciliado" BOOLEAN NOT NULL DEFAULT false,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movimientos_caja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "salarioBase" DECIMAL(10,2) NOT NULL,
    "fechaIngreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos_personal" (
    "id" TEXT NOT NULL,
    "personalId" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "bonificaciones" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "descuentos" DECIMAL(10,2) NOT NULL DEFAULT 0,
    "montoNeto" DECIMAL(10,2) NOT NULL,
    "fechaPago" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "registradoPorId" TEXT,

    CONSTRAINT "pagos_personal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "expensas_periodo_idx" ON "expensas"("periodo");

-- CreateIndex
CREATE INDEX "expensas_estado_idx" ON "expensas"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "expensas_inmuebleId_periodo_key" ON "expensas"("inmuebleId", "periodo");

-- CreateIndex
CREATE INDEX "pagos_expensaId_idx" ON "pagos"("expensaId");

-- CreateIndex
CREATE INDEX "pagos_fechaPago_idx" ON "pagos"("fechaPago");

-- CreateIndex
CREATE INDEX "movimientos_financieros_tipo_idx" ON "movimientos_financieros"("tipo");

-- CreateIndex
CREATE INDEX "movimientos_financieros_fecha_idx" ON "movimientos_financieros"("fecha");

-- CreateIndex
CREATE UNIQUE INDEX "cuentas_bancarias_numeroCuenta_key" ON "cuentas_bancarias"("numeroCuenta");

-- CreateIndex
CREATE INDEX "movimientos_caja_cuentaId_idx" ON "movimientos_caja"("cuentaId");

-- CreateIndex
CREATE INDEX "movimientos_caja_fecha_idx" ON "movimientos_caja"("fecha");

-- CreateIndex
CREATE INDEX "pagos_personal_personalId_idx" ON "pagos_personal"("personalId");

-- CreateIndex
CREATE UNIQUE INDEX "pagos_personal_personalId_periodo_key" ON "pagos_personal"("personalId", "periodo");

-- AddForeignKey
ALTER TABLE "expensas" ADD CONSTRAINT "expensas_inmuebleId_fkey" FOREIGN KEY ("inmuebleId") REFERENCES "inmuebles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_expensaId_fkey" FOREIGN KEY ("expensaId") REFERENCES "expensas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_registradoPorId_fkey" FOREIGN KEY ("registradoPorId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimientos_financieros" ADD CONSTRAINT "movimientos_financieros_registradoPorId_fkey" FOREIGN KEY ("registradoPorId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimientos_caja" ADD CONSTRAINT "movimientos_caja_cuentaId_fkey" FOREIGN KEY ("cuentaId") REFERENCES "cuentas_bancarias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos_personal" ADD CONSTRAINT "pagos_personal_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "personal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos_personal" ADD CONSTRAINT "pagos_personal_registradoPorId_fkey" FOREIGN KEY ("registradoPorId") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

