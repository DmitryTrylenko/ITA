function battleShipGame (field, attacks){
    const hitShipParts = attacks.reduce((acc, cur) => {
      const [x,y] = cur;
      const partOfShip = field[field.length - y][x - 1];
      if (partOfShip > 0) {
        acc[partOfShip] = !acc[partOfShip] ? 1 : acc[partOfShip] + 1;
      }
      return acc;
    }, {});
  
    const fullShipLength = field.reduce((accumulator, current) => {
      current.reduce((acc, cur) => {
        if (cur !== 0) {
          acc[cur] = !acc[cur] ? 1 : acc[cur] + 1;
        }
        return acc;
      }, accumulator);
      return accumulator;
    }, {});
  
    const result = Object.keys(fullShipLength).reduce((acc, cur) => {
      const numberHits = hitShipParts[cur] ? hitShipParts[cur] : 0;
      if (numberHits === 0) {
        acc.notTouched++;
        acc.points--;
      } else if (numberHits === fullShipLength[cur]) {
        acc.sunk++;
        acc.points++;
      } else {
        acc.damaged++;
        acc.points += 0.5;
      }
      return acc;
    }, { sunk: 0, damaged: 0, notTouched: 0, points: 0 });
    return result;
  }
  
  
  var field = [[0,0,0,2,2,0],
               [0,3,0,0,0,0],
               [0,3,0,1,0,0],
               [0,3,0,1,0,0]];
  
  var attacks = [[2, 1], [1, 3], [4, 2]];
  var result = battleShipGame(field, attacks);
  
  console.log(result);
  console.log(result.sunk == 1, "There should be 1 ship sunk");
  console.log(result.damaged == 0, "There should be 0 ship damaged");
  console.log(result.notTouched == 0, "There should be 0 ship notTouched");
  console.log(result.points == 1, "there should be a 1 point score");