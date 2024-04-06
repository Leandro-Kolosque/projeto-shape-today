// Exemplo de requisição POST para criar um novo usuário
fetch("http://localhost:3000/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nome: "Nome do Usuário",
    email: "email@exemplo.com",
    senha: "senha123",
  }),
})
  .then((response) => {
    if (response.ok) {
      console.log("Usuário criado com sucesso!");
      // Faça algo após a criação do usuário, como redirecionar para outra página
    } else {
      console.error("Erro ao criar usuário:", response.statusText);
    }
  })
  .catch((error) => {
    console.error("Erro ao criar usuário:", error);
  });
