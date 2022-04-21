var aPolje1 = [1, 4, 7, 8, 9, 12, 16, 18, 22, 24, 25];
var aPolje2 = [2, 3, 4, 7, 8, 11, 13, 15, 17, 18, 22, 23];

var NewaPolje = aPolje1.filter(e => aPolje2.indexOf(e) !== -1);

NewaPolje.forEach(item => {
    console.log(item);
});
