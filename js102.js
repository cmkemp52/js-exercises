function printNumbers(i,x){
    for(i;i<=x;i++){
        console.log(i);
    }
}
printNumbers(10,15);

console.log("");
console.log("");
console.log("");

function printSquare(num){
    for(i=0;i<num;i++){
        let s = "";
        for(x=0;x<num;x++){
            s+="* ";
        }
        console.log(s);
    }
}
printSquare(5);

console.log("");
console.log("");
console.log("");

function printBox(w,h){
    topbot = "";
    for(i=0;i<w;i++){
        topbot += "* ";
    }
    mid = "";
    for(i=0;i<w;i++){
        if(i===0 || i===w-1){
            mid+="* ";
        } else{
            mid+="  ";
        }
    }
    console.log(topbot)
    for(i=0;i<h-2;i++){
        console.log(mid);
    }
    console.log(topbot);
}
printBox(5,4);

console.log("");
console.log("");
console.log("");

function printBanner(userStr){
    topbot = "";
    for(i=0;i<userStr.length+4;i++){
        topbot += "*"
    }
    console.log(topbot);
    console.log("* "+userStr+" *")
    console.log(topbot);
}
printBanner("Welcome to Digital Crafts")

function factors(num){
    var faclist = [];
    var i = 2;
    while(num > 1){
        while(num%i!=0){
            i++;
        }
        faclist.push(i)
        num=num/i
    }
    console.log(faclist);
}
factors(22)

function cipher(userStr,count,ecdc){
    returnStr = "";
    userStr = userStr.toLowerCase();
    for(i=0;i<userStr.length;i++){
        n = userStr.charCodeAt(i);
        if(n < 97 || n > 122){
            returnStr = returnStr + String.fromCharCode(n);
        } else {
            if(ecdc){
                n+=count;
                if(n>122){
                    n-=26;
                }
                returnStr = returnStr + String.fromCharCode(n);
            }else{
                n-=count;
                if(n<97){
                    n+=26;
                }
                returnStr = returnStr + String.fromCharCode(n);
            }
        }
    }
    console.log(returnStr)
}
cipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13, false)

function leetspeak(userStr){
    userStr = userStr.toUpperCase();
    for(i=0;i<userStr.length;i++){
        userStr = userStr.replace("A","4");
        userStr = userStr.replace("E","3");
        userStr = userStr.replace("G","6");
        userStr = userStr.replace("I","1");
        userStr = userStr.replace("O","0");
        userStr = userStr.replace("S","5");
        userStr = userStr.replace("T","7");
    }
    console.log(userStr);
}
leetspeak("Hello there, Master Kenobi");

function longvowels(userStr){
    userStr = userStr.replace("ee","eeeee");
    userStr = userStr.replace("oo","ooooo");
    userStr = userStr.replace("aa","aaaaa");
    console.log(userStr);
}
longvowels("cheese");

function sumNumbers(arr1){
    resl = 0
    for(i=0;i<arr1.length;i++){
        resl+=arr1[i];
    }
    console.log(resl)
}
sumNumbers([1,4,6])

function positivity(arr1){
    resl = [];
    for(i=0;i<arr1.length;i++){
        if(arr1[i]>-1){
            resl.push(arr1[i])
        }
    }
    console.log(resl)
}
positivity([1, -3, 5, -3, 0])

function roPapSci(p1,p2){
    if(p1===p2){
        console.log("draw")
    }else{
        if(p1==="rock" && p2==="scissors" || p1==="scissors" && p2==="paper" || p1==="paper" && p2==="rock"){
            console.log("Player 1 Wins!")
        } else {
            console.log("Player 2 Wins!")
        }
    }
}
roPapSci("paper", "scissors")

