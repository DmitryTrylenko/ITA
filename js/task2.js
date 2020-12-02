export default function getWordsByOrder(words){
    if (!words) {
        return '';
    }
    return words.split(' ').sort(function(a,b){
      return a.match(/[1-9]/) - b.match(/[1-9]/);
    }).join(' ');
  }