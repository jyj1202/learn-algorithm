function orangesRotting(grid: number[][]): number {
  // 1.只有腐烂或者空的
  function hasNoGood(arr: number[][]): Boolean {
      return arr.every(r => r.every(i => i != 1 ))
  }
  const hng = hasNoGood(grid)
  if (hng) return 0

  // 2.没有腐烂的
  const hasRotted = grid.some(r => r.some(i => i == 2))
  if (!hasRotted) return -1

  // 3.腐烂
  function rot(i: number, j: number, grid: number[][]) {
      let t = (grid[i-1] ?? [])[j]
      let b = (grid[i+1] ?? [])[j]
      let l = grid[i][j-1]
      let r = grid[i][j+1]
      t == 1 &&  (grid[i-1][j] = t+1)
      b == 1 &&  (grid[i+1][j] = b+1)
      l == 1 && (grid[i][j-1] = l+1)
      r == 1 && (grid[i][j+1] = r+1)
      if ([t, b, l, r].includes(1)) {
        return true
      }
  }

  let time = 0
  while (!hasNoGood(grid)) {
      const toRot: [number, number][] = []
      for(let i = 0; i < grid.length; i++) {
          const curRow = grid[i]
          for(let j = 0; j < curRow.length; j++) {
              const curItem = curRow[j]
              if (curItem == 2) {
                  grid[i][j]++
                  toRot.push([i, j])
              }
          }
      }
      let hasRotted = false
      while (toRot.length) {
          const [i, j] = toRot.shift()!
          const res = rot(i, j, grid)
          if(res) {
              hasRotted = true
          }
      }
      if (!hasRotted) return -1
      time++
  }
  return time
};


console.log(orangesRotting([[0]]))  // 4
