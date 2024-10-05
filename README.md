# Exemplo de Micro-Frontend com React

Exemplo de uso do padrão de micro-frontends host-remoto com React e Webpack Module Federation.

## Como usar

Execute os seguintes comandos no diretório raiz.

```bash
yarn
yarn start

Navegue até:

http://localhost:3000 para a aplicação host
http://localhost:4000 para a aplicação remota

## Aplicação Host

Pulls `<App/>` and `<Button />` from the remote app and renders them. Example:

```js
const RemoteApp = React.lazy(() => import("Remote/App"));
```

## Aplicação Remota

Expõe os módulos em um arquivo `moduleEntry.js` em `http://localhost:4000/moduleEntry.js`

`name: 'Remote'`

Exposes:

- `<App />`
- `<Button />`

## Notas

Para transformar isso em um padrão peer-to-peer, você também poderia expor módulos da aplicação host e renderizá-los na aplicação remota, modificando a configuração do webpack da aplicação host para também expor componentes e gerar um arquivo `moduleEntry.js`.
