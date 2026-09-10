const { verifyToken } = require("../utils/jwt");

function autenticar(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = header.split(" ")[1];
  try {
    const payload = verifyToken(token);
    req.usuario = payload; // { id, email, rol }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token invalido o expirado" });
  }
}

module.exports = { autenticar };
