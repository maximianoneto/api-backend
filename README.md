# Aplicação com autenticação de Controllers com Middlewares e banco de dados local
Olá Recrutador(a),

Este é um projeto de aplicação em que implementei autenticação de usuários, controle de acesso com middlewares e banco de dados local. O objetivo deste projeto é servir como base para a criação de aplicações web seguras e escaláveis.

# Tecnologias utilizadas
Node.js

Express.js

MongoDB

Mongoose

Bcrypt

Jsonwebtoken

Nodemailer

# Instalação
Para instalar as dependências necessárias, execute o seguinte comando no terminal:
```
npm install
```
# Configuração

Antes de iniciar a aplicação, você precisa ter o MongoDB instalado em sua máquina e rodando na porta padrão. Certifique-se de que o MongoDB está em execução antes de iniciar a aplicação.

# Variáveis de ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

SECRET=<sua_chave_secreta>

# Como rodar o projeto localmente

Para iniciar a aplicação, execute o seguinte comando no terminal:

```
npm start
```

# Endpoints
Abaixo estão listados os endpoints disponíveis na aplicação.

# POST /auth/register
Endpoint responsável pelo cadastro de um novo usuário na aplicação.
```
Body:

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}

Response:

{
  "user": {
    "_id": "602c4b914f214b4c4e4e4fc8",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "createdAt": "2021-02-16T18:16:01.012Z",
    "updatedAt": "2021-02-16T18:16:01.012Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMmM0YjkxNGYyMTRiNGM0ZTRlNGYzYyIsImlhdCI6MTYxNTYwMTQ2NCwiZXhwIjoxNjE1Njg3ODc3fQ.IBbpZLQ2Cdz8PYRWEJP1V7bYfNYrY9XHkzJqlxG90Iw"
}
```
# POST /auth/authenticate
Endpoint responsável pela autenticação de um usuário na aplicação.

Body:
```
{
  "email": "johndoe@example.com",
  "password": "password123"
}

Response:

{
  "user": {
    "_id": "602c4b914f214b4c4e4e4fc8",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "createdAt": "2021-02-16T18:16:01.012Z",
    "updatedAt": "2021-02-16T18:16:01.012Z",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI
  ```
