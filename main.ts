
//Enums
enum color{
    Red,
    Yellow,
    Green,
}
console.log(color.Green);  // 2
console.log(color[2]);     // Green
console.log(color["Green"]);  // 2

//enum may hum index bhi change kar sakhtay h
enum color{
    pink = 5,
    Black = 6,
    Orange = 7
}
console.log(color.Orange);   // 7

for(let i = 10; i > 0; i--){    // 10 say 1 tak countdown hoga
    console.log(i);
}

////////////////////////////////////////////////// example

enum Color{
    Red,
    Yellow,
    Green,
}

function trafficLight (curr: Color) {

    if(curr === Color.Red) {
        console.log("Stop");
    }
    else if (curr === Color.Green) {
        console.log("Go");
    }

    else {
        console.log("Ready")
    }

}

trafficLight(Color.Red);

///////////////////////////////////// Tupple /////////////////////




