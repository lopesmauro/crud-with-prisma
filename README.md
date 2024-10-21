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
   git clone https://github.com/lopesmauro/crud-with-prisma.git
   cd crud-with-prisma
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

### 1. Criar Usuário
- **Endpoint**: `POST /users`
- **Descrição**: Cria um novo usuário.
- **Corpo da Requisição**:
    ```json
    {
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "age": "30"
    }
    ```
- **Respostas**:
  - **201 Created**: Usuário criado com sucesso.
    ```json
    {
      "id": "1",
      "name": "Nome do Usuário",
      "email": "email@exemplo.com",
      "age": "30"
    }
    ```
  - **500 Internal Server Error**: Erro ao criar usuário.
    ```json
    {
      "message": "Erro ao criar usuário"
    }
    ```

### 2. Obter Todos os Usuários
- **Endpoint**: `GET /users`
- **Descrição**: Recupera a lista de todos os usuários.
- **Parâmetros de Consulta**: (opcional)
  - `page`: Número da página para paginar resultados.
  - `limit`: Número máximo de usuários a retornar por página.
- **Respostas**:
  - **200 OK**: Retorna a lista de usuários.
    ```json
    [
      {
        "id": "1",
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "age": "30"
      },
      ...
    ]
    ```
  - **500 Internal Server Error**: Erro ao obter usuários.
    ```json
    {
      "message": "Erro ao obter usuários"
    }
    ```

### 3. Atualizar Usuário
- **Endpoint**: `PUT /users/{id}`
- **Descrição**: Atualiza as informações de um usuário existente.
- **Parâmetros**:
  - `id`: ID do usuário a ser atualizado.
- **Corpo da Requisição**:
    ```json
    {
      "name": "Nome Atualizado",
      "email": "novoemail@exemplo.com",
      "age": "31"
    }
    ```
- **Respostas**:
  - **200 OK**: Usuário atualizado com sucesso.
    ```json
    {
      "id": "1",
      "name": "Nome Atualizado",
      "email": "novoemail@exemplo.com",
      "age": "31"
    }
    ```
  - **404 Not Found**: Usuário não encontrado.
    ```json
    {
      "message": "Usuário não encontrado"
    }
    ```
  - **500 Internal Server Error**: Erro ao atualizar usuário.
    ```json
    {
      "message": "Erro ao atualizar usuário"
    }
    ```

### 4. Deletar Usuário
- **Endpoint**: `DELETE /users/{id}`
- **Descrição**: Remove um usuário existente.
- **Parâmetros**:
  - `id`: ID do usuário a ser deletado.
- **Respostas**:
  - **200 OK**: Usuário deletado com sucesso.
    ```json
    {
      "message": "Usuário deletado com sucesso"
    }
    ```
  - **404 Not Found**: Usuário não encontrado.
    ```json
    {
      "message": "Usuário não encontrado"
    }
    ```
  - **500 Internal Server Error**: Erro ao deletar usuário.
    ```json
    {
      "message": "Erro ao deletar usuário"
    }
    ```




