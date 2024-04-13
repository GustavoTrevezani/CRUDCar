import { db } from "../db.js";

export const getUsers = (req, res) => {
  //conecta ao banco de dados, pegando todos os dados da tabela usuarios
  const q = "SELECT * FROM usuarios";

  db.query(q, (error, data) => {
    //valida se há algum erro
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json(data);
    }
  });
};
