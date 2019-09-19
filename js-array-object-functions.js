function positive(arr1){
    var arr2 = arr1.filter(n=>n>-1);
    return arr2;
}
console.log(positive([1, -3, 5, -3, 0]))

function evennum(arr1){
    var arr2 = arr1.filter(n=>n%2==0);
    return arr2;
}
console.log(evennum([1, -3, 6, 2, 10]))

function squareTheNums(arr1){
    var arr2 = arr1.map(n=>n*n);
    return arr2;
}
console.log(squareTheNums([1, -3, 6, 2, 10]))

const cities = [{ name: 'Los Angeles', temperature: 60.0},{ name: 'Atlanta', temperature: 52.0 },{ name: 'Detroit', temperature: 48.0 },{ name: 'New York', temperature: 80.0 }];
function coldCities(citylist){
    arr2 = citylist.filter(n=>n.temperature<70);
    return arr2;
}
console.log(coldCities(cities))

function cityNames(cityList){
    arr1 = []
    cityList.map(n => arr1.push(n.name));
    return arr1;
}
console.log(cityNames(cities));

const people = ['Dom','Lyn','Kirk','Autumn','Trista','Jesslyn','Kevin','John','Eli','Juan','Robert','Keyur','Jason','Che','Ben'];
function goodJob(names){
    names.map(n=>console.log("Good job, "+n+"!"))
}
goodJob(people);

function hello(){
    console.log("Hello, World!");
}
function callNTimes(n,fun) {
    for(i=0;i<n;i++){
        fun();
    }
}  
callNTimes(5, hello);

function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
        arr.push(i);
    }
    return arr;
}
function strMultiply(userStr, count){
    arr1 = range(0,count);
    let endStr = "";
    arr1.map(n=>endStr+=userStr);
    return endStr;
}
console.log(strMultiply("abc",5))

function letterSort(userStr){
    let listStr = userStr.split("");
    let newList = listStr.sort();
    return listStr.join("");
}
console.log(letterSort("hello there"));

function alphSort(inList){
    return inList.sort();
}
console.log(alphSort(people));

function sortSize(inList){
    return inList.sort(function(b, a){return b.length - a.length});
}
console.log(sortSize(people));

const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
];
function costSort(inList){
    return inList.sort(function(b, a){return b.price - a.price});
}
console.log(costSort(products));