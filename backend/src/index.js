const express = require("express");

/**modulo de segunrança */
const cors = require("cors");
/**
 * acessa as rotas disponibilizadas no arquivo routes.js
 * deve ser referenciado com "./" pois é um arquivo interno
 * e não um biblioteca
 */
const routes = require("./routes");
const app = express();

app.use(cors());
/**
 * Faz com que as requisições entendão o formato JSON
 */
app.use(express.json());

app.use(routes);
/**
 * Formas de acesso a BD
 * Driver: Select * from users
 * Query Builder: table('users').select('*').where() - mais indicado
 * pois permiter migrar de BD sem alterar a aplicação
 */

app.listen(3333);
