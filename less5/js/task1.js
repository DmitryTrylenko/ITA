export default function sortString(s) {
    const result = s.toUpperCase().split(';').map(element => `(${element.split(':')[1]}, ${element.split(':')[0]})`).sort().join('');

    return result;
};
