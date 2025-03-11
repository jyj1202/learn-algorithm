function isValid(token: string) {
  const reg = /^[ADWS]\d{1,2}$/
  return reg.test(token)
}

function move(token: string, x: number, y: number) {
  const dir = token.slice(0,1)
  const distance = +token.slice(1)
  switch (dir) {
      case 'W':
          y -= distance;
          break;
      case 'S':
          y += distance;
          break;
      case 'A':
          x -= distance;
          break;
      case 'D':
          x += distance;
          break;
  }
  return [x, y]
}

const line = 'A10;S20;W10;D30;X;A1A;B10A11;;A10;'
const tokens = line.split(';');
let x = 0, y = 0
for (let i = 0; i < tokens.length; i++) {
  const curToken = tokens[i]
  if(isValid(curToken)) {
      [x, y] = move(curToken, x, y)
  }
}
console.log(x, y)