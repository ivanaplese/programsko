// prvi zadatak

function FizzBuzz() {
    for(let i = 0; i < 100; i++) {
        if(i % 15 == 0) {
            console.log("FizzBuzz");
        } else if(i % 5 == 0) {
            console.log("Fizz");
        } else if(i % 3 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//drugi zadatak
// Broji do 100, koristeći jednu varijablu. (Zapravo su dvije, podsjetite me da vam pokazem s jednom)
function CountToHundred() {
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log("Sum: ", sum);
}

// treci zadatak
// NAPISI FUNKCIJU KOJA KVADRIRA, ALI PAZI DA JE PARAMETAR OK

function SquareMe(param) {
    return param * param;

}