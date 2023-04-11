# Setup

install the following tools:
- `direnv`
- `asdf`

`cd` into this folder, and run `direnv allow`. This will add the `node_modules/.bin` to your `$PATH` whilst in this tree.

run `asdf install` to install all the tools needed (specific node versions, task runner, etc)

running `task ./dist` will generate a `dist` directory that is plain gjs-flavored javascript based on the contents of the `src/exports` directory