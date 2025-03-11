function permutation(S: string): string[] {
  const arr = S.split('').sort()
  const res: string[][] = []

  function fn(stack: string[], source: string[]) {
      if (source.length == 0) {
          res.push([...stack])
          return
      }
      for(let i = 0; i < source.length; i++) {
          const cur = source[i]
          const pre = source[i-1]
          if (cur == pre) {
              continue
          }
          stack.push(cur)
          fn(stack, source.filter((_, idx) => idx != i))
          stack.pop()            
      }
  }

  fn([], arr)
  return res.map(i => i.join(''))
};

console.log(permutation("qqe")) // ["eqq","qeq","qqe"]

