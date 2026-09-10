const prisma = require("../../../config/prisma");

/**
 * Registra una entrada de auditoria. Nunca debe interrumpir el flujo principal:
 * un fallo al auditar se loguea en consola pero no propaga el error.
 */
async function registrarAuditoria({ usuarioId, accion, entidad, entidadId, detalle, ip }) {
  try {
    await prisma.historialAuditoria.create({
      data: { usuarioId, accion, entidad, entidadId, detalle, ip },
    });
  } catch (err) {
    console.error("No se pudo registrar auditoria:", err.message);
  }
}

module.exports = { registrarAuditoria };
