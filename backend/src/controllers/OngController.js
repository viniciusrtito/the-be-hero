/**
 * biblioteca de criptogafia
 */
const crypto = require("crypto");

/**
 * acesso ao banco de dados
 */
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    /**
     * formato estruturado
     */
    /*const data = request.body;*/

    /**
     * formato desestruturado
     */
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  },

  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  }
};
