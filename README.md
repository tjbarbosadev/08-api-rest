# API RESTful com Node.js

## Primeiros passos

Iniciar o projeto Node e GIT

```
npm init --y
git init
```

#### Criar os arquivos:

- .gitignore
- .prettierc

## Usando TypeScript

Instalação do typescript com o types para node e txs para rodar arquivos .ts

```
npm i typescript@5.5.4 tsx@4.16.2 @types/node@20.14.12 -D
```

#### Inserir no script do package.json

```
"dev": "tsx watch src/server.ts"
```

#### arquivo de configuração

```
npx tsc --init
```

Conferir no github do TypeScript a configuração para a versão do Node utilizada:
[node target mapping github](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)

## Usando Express

Instalação do express e types para node

```
npm i express@4.19.2 @types/express
```
