export function secondMethod(obj){
    obj.point = (obj.point + 1) % obj.str.length;
    document.title = obj.str[obj.point];
}