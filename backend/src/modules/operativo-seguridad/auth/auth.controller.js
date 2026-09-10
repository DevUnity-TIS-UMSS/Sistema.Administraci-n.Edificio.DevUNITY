const authService = require("./auth.service");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "email y password son requeridos" });
    }

    const resultado = await authService.login({ email, password, ip: req.ip });
    res.json(resultado);
  } catch (err) {
    next(err);
  }
}

function perfil(req, res) {
  // req.usuario viene del middleware `autenticar` (payload del JWT)
  res.json({ usuario: req.usuario });
}

module.exports = { login, perfil };
