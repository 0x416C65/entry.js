const getStyle = (color) =>
  `font-size:18px;color:${color};font-family:sans-serif`;

console.log('%cEi, bisbilhoteiro do console!', getStyle('#ff00ff'));
console.log(
  '%cInfelizmente, o tesouro escondido não está aqui.',
  getStyle('#ff0000')
);
console.log(
  '%cMas, e se eu te disser que temos um jogo secreto?',
  getStyle('#ff00ff')
);
console.log(
  "%cTente digitar: 'startGame()' e veja o que acontece!",
  getStyle('#ff0000')
);

const startGame = () => {
  console.clear();
  console.log(
    '%cAgora é sério, pare de fuçar e siga no Twitter para mais: https://twitter.com/0x416C65',
    getStyle('#ff00ff')
  );
};
