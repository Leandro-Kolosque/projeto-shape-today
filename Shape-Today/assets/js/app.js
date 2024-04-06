const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração da conexão com o MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "seu_usuario_mysql",
  password: "sua_senha_mysql",
  database: "crudlogin",
});

// Conectando ao MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conectado ao MySQL...");
});

// Rota para criar um novo usuário
app.post("/usuarios", (req, res) => {
  const { nome, email, senha } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
  db.query(INSERT_USER_QUERY, [nome, email, senha], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send("Usuário criado com sucesso!");
  });
});

// Rota para obter todos os usuários
app.get("/usuarios", (req, res) => {
  const SELECT_ALL_USERS_QUERY = `SELECT * FROM usuarios`;
  db.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Rota para atualizar um usuário
app.put("/usuarios/:id", (req, res) => {
  const userId = req.params.id;
  const { nome, email, senha } = req.body;
  const UPDATE_USER_QUERY = `UPDATE usuarios SET nome=?, email=?, senha=? WHERE id=?`;
  db.query(UPDATE_USER_QUERY, [nome, email, senha, userId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send("Usuário atualizado com sucesso!");
  });
});

// Rota para deletar um usuário
app.delete("/usuarios/:id", (req, res) => {
  const userId = req.params.id;
  const DELETE_USER_QUERY = `DELETE FROM usuarios WHERE id=?`;
  db.query(DELETE_USER_QUERY, [userId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send("Usuário deletado com sucesso!");
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
