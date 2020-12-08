function meeting (occupant, chairs) {
    if(0 == chairs) return 'Game On';

    let answer = occupant.map( ([x, y]) => Math.max(...[y - x.length, 0]));
    let sumChairs = answer.reduce((a, b) => a + b , 0);

    if( sumChairs < chairs) {
      return 'Not enough!';
    } else {
     sumChairs = 0;
     let result = [];
     while(sumChairs < chairs){
        let tmp = answer.shift();
        sumChairs += tmp
        result.push(tmp)
     }
     result[result.length - 1] -=  sumChairs - chairs
     return result;
    }
  };

  console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));