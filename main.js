"use strict";
//Enums
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Yellow"] = 1] = "Yellow";
    color[color["Green"] = 2] = "Green";
})(color || (color = {}));
console.log(color.Green); // 2
console.log(color[2]); // Green
console.log(color["Green"]); // 2
//enum may hum index bhi change kar sakhtay h
(function (color) {
    color[color["pink"] = 5] = "pink";
    color[color["Black"] = 6] = "Black";
    color[color["Orange"] = 7] = "Orange";
})(color || (color = {}));
console.log(color.Orange); // 7
for (let i = 10; i > 0; i--) {
    console.log(i);
}
////////////////////////////////////////////////// example
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
function trafficLight(curr) {
    if (curr === Color.Red) {
        console.log("Stop");
    }
    else if (curr === Color.Green) {
        console.log("Go");
    }
    else {
        console.log("Ready");
    }
}
trafficLight(Color.Red);
///////////////////////////////////// Tupple /////////////////////
