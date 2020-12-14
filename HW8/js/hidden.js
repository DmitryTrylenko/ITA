function decodeLetter(text) {
    let output = '';
    const sentences = text.split('. ');
 
    const firstSentenceArrr = sentences[0].match(/[^",,\s]+/g);
    sentences.shift();
 
    let wordsLength = [];
 
    for (let i = 0; i < firstSentenceArrr.length; i++) {
        wordsLength.push(firstSentenceArrr[i].length);
    }
 
    for (let i = 0; i < wordsLength.length; i++) {
        const wordsArr = sentences[i].match(/[^",,\s]+/g);
 
        output = output + ' ' + wordsArr[wordsLength[i] - 1];
    }
 
    return output.charAt(0).toUpperCase() + output.slice(1);
}

console.log(decodeLetter('Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'));