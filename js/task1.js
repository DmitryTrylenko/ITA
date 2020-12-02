export default function getBitsNumber(value) {
    if (!value) {
        return 0;
    }
    const bits = value.toString(2).split('');
    const result = bits.reduce((sum, num) => sum + Number(num), 0);

    return result; 
};