const { Router } = require('express')
const { autenticar } = require('../../../middlewares/auth.middleware')
const { autorizar } = require('../../../middlewares/rbac.middleware')

const router = Router()

/**
 * @openapi
 * /api/financiero/whoami:
 *   get:
 *     summary: Endpoint de soporte - confirma que el modulo Financiero puede leer el usuario autenticado
 *     tags: [Financiero]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Usuario autenticado }
 *       401: { description: Token no valido }
 *       403: { description: Sin permisos }
 */
router.get(
  '/whoami',
  autenticar,
  autorizar('ADMINISTRADOR', 'DIRECTORIO', 'CONSULTA'),
  (req, res) => {
    res.json({
      mensaje: 'Modulo Financiero reconocio correctamente al usuario autenticado',
      usuario: req.usuario
    })
  }
)

module.exports = router
