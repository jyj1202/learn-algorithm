export function generateVortex(rows, cols, initial = 0) {
  if (rows < 0 || cols < 0) {
    throw new Error('rows and cols must be greater than 0')
  }

  const res = Array.from({length: rows}, () => Array(cols))

  if (rows == 0 || cols == 0) {
    return res
  }

  let curRow = 0
  let curCol = 0
  let rowStep = 0
  let colStep = 1
  
  function _needChangeDirection() {
    return (
      curRow + rowStep > rows - 1 ||
      curRow + rowStep < 0 ||
      curCol + colStep < 0 ||
      curCol + colStep > cols - 1 ||
      res[curRow + rowStep][curCol + colStep] != undefined
    );
  }

  while (1) {
    res[curRow][curCol] = initial++

    if (_needChangeDirection()) {
      if (rowStep == 0) {
        rowStep = colStep
        colStep = 0
      } else {
        colStep = -rowStep
        rowStep = 0
      }
      if (_needChangeDirection()) {
        break
      }
    }

    curRow += rowStep
    curCol += colStep
  }

  return res
}

export function generateVortexFromArray(source, rows, cols) {
  if (rows < 0 || cols < 0) {
    throw new Error('rows and cols must be greater than 0')
  }

  const res = Array.from({length: rows}, () => Array(cols))

  if (rows == 0 || cols == 0) {
    return res
  }

  let curRow = 0
  let curCol = 0
  let rowStep = 0
  let colStep = 1
  let index = 0
  
  function _needChangeDirection() {
    return (
      curRow + rowStep > rows - 1 ||
      curRow + rowStep < 0 ||
      curCol + colStep < 0 ||
      curCol + colStep > cols - 1 ||
      res[curRow + rowStep][curCol + colStep] != undefined
    );
  }

  // eslint-disable-next-line no-constant-condition
  while (1) {
    if (index >= source.length) {
      break
    }
    
    res[curRow][curCol] = source[index++]

    if (_needChangeDirection()) {
      if (rowStep == 0) {
        rowStep = colStep
        colStep = 0
      } else {
        colStep = -rowStep
        rowStep = 0
      }
      if (index >= source.length || _needChangeDirection()) {
        break
      }
    }

    curRow += rowStep
    curCol += colStep
  }

  return res
}
