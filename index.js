function result(num) {
    return function (elem) {
        return num += elem;
    };
};
const sum = result(0);
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));