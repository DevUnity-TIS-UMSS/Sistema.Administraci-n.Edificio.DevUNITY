const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Sistema de Administracion Edificio XYZ",
      version: "0.1.0",
      description:
        "Documentacion de endpoints de los modulos Financiero y Operativo/Seguridad.",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/modules/**/*.routes.js"],
};

module.exports = swaggerJsdoc(options);
