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
export const getUniqueUsers = (req, res) => {
  //conecta ao banco de dados, pegando todos os dados da tabela usuarios
  const q = "SELECT * FROM usuarios WHERE `id`=?";

  db.query(q, [req.params.id], (error, data) => {
    //valida se há algum erro
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json(data);
    }
  });
};

export const postUsers = (req, res) => {
  const q = "INSERT INTO usuarios(`nome`, `email`, `telefone`, `carro`) VALUES(?)";

  const values = [req.body.nome, req.body.email, req.body.telefone, req.body.carro];

  db.query(q, [values], (error) => {
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json("Usuário criado com sucesso");
    }
  });
};

export const putUsers = (req, res) => {
  const q = "UPDATE usuarios SET `nome`=?, `email`=?, `telefone`=?, `carro`=? WHERE `id`=?";
  const values = [req.body.nome, req.body.email, req.body.telefone, req.body.carro];
  // query(string, valores/parâmetros e por último um callback)
  db.query(q, [...values, req.params.id], (error) => {
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json("Usuário atualizado com sucesso");
    }
  });
};

export const deleteUsers = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id`= ? ";

  db.query(q, [req.params.id], (error) => {
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json("Usuário deletado com sucesso!");
    }
  });
};
