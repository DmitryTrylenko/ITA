function getWinner(field) {
    const overWinner = field => key => 
    [
      horizontalWin(field, key),
      verticalWin(field, key),
      leftDiagWin(field, key),
      rightDiagWin(field, key)
    ].some(e => Boolean(e));

    const result = overWinner(field);
    
    return result(1) ? 1 : result(2) ? 2 :  emptySlots(field) ? -1 : 0;
  };

  const emptySlots = field =>
    field.map(x => x.some(e => e === 0)).some(e => Boolean(e));
    
  const horizontalWin = (field, key) =>
    field.map(x => x.every(e => e === key)).some(e => Boolean(e));
  
  const verticalWin = (field, key) =>
    horizontalWin(rotateField(field), key);
    
  const leftDiagWin = (field, key) =>
    [0, 1, 2].map((winIdx, rowIdx) => field[rowIdx][winIdx] === key).every(e => Boolean(e));
  
  const rightDiagWin = (field, key) =>
    [2, 1, 0].map((winIdx, rowIdx) => field[rowIdx][winIdx] === key).every(e => Boolean(e)); 
    
  const rotateField = field => 
    Array(field[0].length)
      .fill(null)
      .map((x, idx) => field.map(e => e[idx])); 

console.log(getWinner([[0, 1, 1], 
                      [0, 1, 2], 
                      [2, 1, 0]]));