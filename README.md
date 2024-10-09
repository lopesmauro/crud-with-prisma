# CRUD with Prisma and MongoDB

## Descrição

Este projeto consiste em um setup inicial de um CRUD (Create, Read, Update, Delete) utilizando **Prisma** como ORM e **MongoDB** como banco de dados. O objetivo é fornecer uma estrutura básica que pode ser expandida e atualizada conforme necessário.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM para interagir com o MongoDB.
- **MongoDB**: Banco de dados NoSQL.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```
2. Instale as dependências
   ```
   npm install
   ```
## Configure o ambiente

1. Adicione a URL de conexão:
   ```
   DATABASE_URL="sua_url_do_mongodb"
   ```
2. Inicie o Prisma:
    ```
    npx prisma migrate dev --name init
    ```
3. Inicie o servidor:
    ```
    npm start
    ```

## Endpoints

- GET: lista ou consulta dados
- POST: criação de dados
- PUT: atualização de dados
- DELETE: remoção de dados




