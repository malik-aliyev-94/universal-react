# Universal React Application
Great thanks to [Luciano Mammino](https://scotch.io/@loige) for the tutorial
[React on the Server for Beginners: Build a Universal React and Node App](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app)

GitHub repository of this tutorial is available from this link [judo-heroes-2](https://github.com/lmammino/judo-heroes-2)

## What is universal JS ?
This is JavaScript which renders the same HTML whether on the server or on the client :)

### [Advantages](https://medium.com/commencis/isomorphic-universal-javascript-496dc8c4341a)
- Better performance
- Full SEO support
- Flexibility of client-side
- Maintenance
- Old device support
- Poor connections
- Better user experience

## Setup

```bash
git clone https://github.com/malik-aliyev-94/universal-react.git
cd universal-react
yarn # or `npm i` if you are not using yarn
```

## Available commands

Available commands to run with `npm run`:

 - `start`: build the production package and run the production server (no universal)
 - `start:universal`: build the production package and run the production server with universal rendering
 - `start:dev`: build the dev package and run the server in dev mode (no universal rendering — auto-restarts on changes)
 - `start:dev:universal`: build the dev package and run the server in dev mode with universal rendering (auto-restarts on changes)
 - `build`: build the production package
 - `build:dev`: build the dev package
 - `build:dev:watch`: build the dev package in watch mode (listen for changes and re-build immediately)
