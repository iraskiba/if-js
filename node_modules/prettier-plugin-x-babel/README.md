# prettier-plugin-x-babel

[![LICENSE](https://img.shields.io/npm/l/prettier-plugin-x-babel?color=green&style=flat-square)](./LICENSE.md)
[![npm package](https://img.shields.io/npm/v/prettier-plugin-x-babel?color=blue&style=flat-square)](https://www.npmjs.com/package/prettier-plugin-x-babel)

A fork of [`prettier-plugin-x`](https://github.com/brodybits/prettier-plugin-x) which uses
**[Babel](https://babeljs.io/)** and **[prettierX](https://github.com/brodybits/prettierx)**
by default for ES languages JavaScript, Flow, and TypeScript, all in a
**[Prettier plugin](https://prettier.io/docs/en/plugins.html)**.

Includes options from **[prettierX](https://github.com/brodybits/prettierx)** for
improved parity with **["Standard JS"](https://standardjs.com/)**, for example:

```js
function * a () {}

console.log(typeof a)
```

with the following `.prettierrc` configuration:

```js
{
  semi: false,
  generatorStarSpacing: true,
  spaceBeforeFunctionParen: true
}
```

## Installation

with Yarn (recommended):

```console
yarn add --dev prettier-plugin-x-babel
```

or with npm:

```console
npm install --save-dev prettier-plugin-x-babel
```

## Sample usage

```console
prettier --config ./sample-prettierx-prettierrc --check sample.js
```

to specify TypeScript via `babel-ts` parser:

```console
prettier --config ./sample-prettierx-prettierrc --parser=typescript --check sample.js
```

or:

```console
prettier --config ./sample-prettierx-prettierrc --parser=babel-ts --check sample.js
```

to specify Flow via `babel-flow` parser:

```console
prettier --config ./sample-prettierx-prettierrc --parser=flow --check sample.js
```

or:

```console
prettier --config ./sample-prettierx-prettierrc --parser=babel-flow --check sample.js
```

## Thanks and credits

- Based on: [`prettier-plugin-x`](https://github.com/brodybits/prettier-plugin-x)
- Thanks to **<https://github.com/prettier/plugin-php>** for an easy-to-understand Prettier plugin,
  which helped with the initial structure of this Prettier plugin.
