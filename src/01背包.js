function getRes(total, ws, vs) {
  let result = []
  for(let j = 0; j <= total; j++) {
      result.push(ws[0] <= j ? vs[0] : 0)
  }

  // dp(i, j) = Math.max(dp(i-1, j), vs[i]+dp(i-1, j-ws[i]))

  for(let i = 1; i < ws.length; i++) {
      const res = []
      for(let j = 0; j <= total; j++) {
          if(ws[i] <= j) {
              res[j] = Math.max(result[j], vs[i]+result[j-ws[i]])
          } else {
              res[j] = result[j]
          }
      }
      result = res
  }

  return result[total]
}

const r = getRes(2, [2, 2, 2, 10, 12, 5, 4, 8], [591, 934, 764, 29, 102, 674, 224, 500])
// console.log(r)


function getRes2(total, ws, vs) {
  const infos = ws
      .map((w, index) => ({
          w,
          v: vs[index],
      }))
      .filter((i) => i.w <= total);

  infos.sort((a, b) => a.w - b.w);

  

  let j = 0;
  const stack = [];
  const vals = [0];
  const arrs = []
  while (j < infos.length) {
      let i = j;
      while (i < infos.length) {
          const cur = infos[i];
          const curSum =
              stack.reduce((acc, cur) => acc + cur.w, 0) + cur.w;
          if (curSum > total) {
              if (stack.length == 0) {
                  break;
              } else {
                  stack.pop();
                  continue;
              }
          } else if (curSum == total) {
              stack.push(cur);
              vals.push(stack.reduce((acc, cur) => acc + cur.v, 0));
              arrs.push([...stack])
              stack.pop()
              stack.pop()
              continue;
          } else {
              stack.push(cur);
              i++;
          }
      }
      stack.length = 0
      i = ++j;
  }

  return Math.max(...vals)
}

const r2 = getRes2(11,
  [2, 7, 3, 1, 5, 10, 6, 9],
  [497, 945, 700, 252, 99, 362, 330, 648]
)

console.log(r2);

