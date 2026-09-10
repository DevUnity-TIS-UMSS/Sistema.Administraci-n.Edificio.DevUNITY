/**
 * Restringe el acceso a los roles indicados. Debe usarse siempre despues de `autenticar`.
 * Uso: router.post("/", autenticar, autorizar("ADMINISTRADOR"), controller.crear)
 */
function autorizar(...rolesPermitidos) {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ error: "No autenticado" });
    }
    if (!rolesPermitidos.includes(req.usuario.rol)) {
      return res.status(403).json({ error: "No tiene permisos para esta accion" });
    }
    next();
  };
}

module.exports = { autorizar };
