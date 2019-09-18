function hello(name = "World") {
    console.log("Hello, "+name)
}
hello();
hello('Mustache');

function madlib(name, subject){
    console.log(name+"\'s favorite subject is "+subject)
}
madlib("chris","math")

function tipAmount(bill,service){
    switch(service){
        case "good":
            return(bill*0.20);
        case "fair":
            return(bill*0.15);
        case "bad":
            return(bill*0.10)
    }
}
console.log(tipAmount(100,"good"));

function totalAmount(bill,service){
    switch(service){
        case "good":
            return((bill*0.20)+bill);
        case "fair":
            return((bill*0.15)+bill);
        case "bad":
            return((bill*0.10)+bill);
    }
}
console.log(totalAmount(100,"good"));

function splitAmount(bill,service,guests){
    switch(service){
        case "good":
            return(((bill*0.20)+bill)/guests);
        case "fair":
            return(((bill*0.15)+bill)/guests);
        case "bad":
            return(((bill*0.10)+bill)/guests);
    }
}
console.log(splitAmount(100,"good",5));