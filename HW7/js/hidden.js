function decodeLetter(text) {
    let output = '';
    const sentences = text.split('. ');
 
    const firstSentenceArrr = sentences[0].match(/[^,,\s]+/g);
    sentences.shift();
 
    let wordsLength = [];
 
    for (let i = 0; i < firstSentenceArrr.length; i++) {
        wordsLength.push(firstSentenceArrr[i].length);
    }
 
    for (let i = 0; i < wordsLength.length; i++) {
        const wordsArr = sentences[i].match(/[^,,\s]+/g);
 
        output = output + ' ' + wordsArr[wordsLength[i]];
    }
 
    return output.charAt(0).toUpperCase() + output.slice(1);
 }