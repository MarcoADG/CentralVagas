# Controle de Vagas - Aplicação em Next.js

Este é um projeto simples de uma aplicação web construída com **Next.js** e **TypeScript** que permite ao usuário controlar todas as vagas de emprego para as quais se candidatou. A aplicação armazena informações como título da vaga, nome da empresa e link para a vaga. Os dados são salvos localmente utilizando **IndexedDB**, o que permite armazenar um número considerável de vagas no navegador.

## Funcionalidades

- Adicionar vagas com título, empresa e link.
- Excluir vagas já cadastradas.
- Visualizar todas as vagas em uma lista.
- Links para as vagas abrem em uma nova aba.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **TypeScript**: Suporte a tipagem estática no JavaScript.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **IndexedDB**: Banco de dados no navegador para armazenamento local dos dados.
- **Vercel**: Plataforma de deploy para hospedar a aplicação (opcional).

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone este repositório:

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:
   ```
   npm install
   # ou
   yarn install
   ```

Executando o Projeto
Para iniciar o projeto em ambiente de desenvolvimento, execute o seguinte comando:

    ```
    npm run dev
    # ou
    yarn dev
    ```
