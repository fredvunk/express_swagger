const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "Menu API",
      version: "1.0.0",
      description: "API for food items on menu"
    }
  },
  apis: ["endpoints.js"]
};

const specs = swaggerJsdoc(options);

module.exports = app => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
