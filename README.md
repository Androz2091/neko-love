# Neko Love API

This package is a wrapper to easly get images from neko-love.xyz!

## Installation

```
npm install neko-love --save
```

## Example

```js
const Neko = require("neko-love");
const client = new Neko.Client();

client.kiss().then((url) => {
    console.log(url); // https://neko-love.xyz/v1/kiss/neko-love_kiss_24.jpg
});

client.cry().then((url) => {
    console.log(url); // https://neko-love.xyz/v1/cry/neko-love-cry_20.gif
});
```

## Endpoints

### SFW

*   neko
*   kitsune
*   hug
*   pat
*   waifu
*   cry
*   kiss

### NSFW

*   nekolewd

[Full Neko Love API documentation](https://docs.neko-love.xyz/)

## Links

*   [Website](https://neko-love.xyz)
*   [Documentation](https://docs.neko-love.xyz/)
*   [Discord](https://discord.gg/byThR3v)
*   [Github (source)](https://github.com/Androz2091/neko-love)
*   [NPM](https://npmjs.com/neko-love)