const express = require("express");

const OngController = require("./controllers/OngController");
const SessionController = require("./controllers/SessionController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const routes = express.Router();

/**
 * Métodos HTTP:
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deleta informação no back-end
 */

/**
 * Tipos de parâmetros
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?",
 * geralmente usado para filtro e paginação
 * ex: http://localhost:3333/users?name=vinicius&idade=33
 *
 * Route Params: Parâmetro utilizado para identificar recurso
 * (ter acesso a todos os dados de um id)
 * ex: http://localhost:3333/users/1
 *
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post("/sessions", SessionController.create);
routes.post("/ongs", OngController.create);

routes.get("/ongs", OngController.index);

routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);
routes.get("/profile", ProfileController.index);
/**
 * Disponibiliza as rotas para a aplicação toda
 */
module.exports = routes;
