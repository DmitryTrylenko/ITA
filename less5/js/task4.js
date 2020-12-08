export default function ipsBetween(start, end) {
    start = start.split('.');
  
    return end.split('.').reduce(function(accumulator, currentValue, i) {
      return (accumulator << 8) + Number(currentValue) - Number(start[i]);
    }, 0);
  };