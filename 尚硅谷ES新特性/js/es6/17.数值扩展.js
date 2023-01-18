// 最小精度
console.log(Number.EPSILON);
function eql(a, b) {
    if (a - b < Number.EPSILON) {
        return true;
    } else {
        return false;
    }
}