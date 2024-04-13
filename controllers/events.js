import { db } from "../db.js";

export const getEvents = (req, res) => {
  //conecta ao banco de dados, pegando todos os dados da tabela eventos
  const q = "SELECT * FROM eventos";

  db.query(q, (error, data) => {
    //valida se há algum erro
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json(data);
    }
  });
};
export const getUniqueEvents = (req, res) => {
  //conecta ao banco de dados, pegando todos os dados da tabela eventos
  const q = "SELECT * FROM eventos WHERE `id`=?";

  db.query(q, [req.params.id], (error, data) => {
    //valida se há algum erro
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json(data);
    }
  });
};

export const postEvents = (req, res) => {
  const q = "INSERT INTO eventos(`eventos_nome`, `eventos_dia`) VALUES(?)";

  const values = [req.body.eventos_nome, req.body.eventos_dia];

  db.query(q, [values], (error) => {
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json("Evento criado com sucesso!");
    }
  });
};

export const putEvents = (req, res) => {
  const q = "UPDATE eventos SET `eventos_nome`=?, `eventos_dia`=? WHERE `id`=?";
  const values = [req.body.eventos_nome, req.body.eventos_dia];
  // query(string, valores/parâmetros e por último um callback)
  db.query(q, [...values, req.params.id], (error) => {
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json("Evento atualizado com sucesso");
    }
  });
};

export const deleteEvents = (req, res) => {
  const q = "DELETE FROM eventos WHERE `id`= ? ";

  db.query(q, [req.params.id], (error) => {
    if (error) {
      return res.json(error);
    } else {
      return res.status(200).json("Evento cancelado!!");
    }
  });
};
