// BeagleBone Black + Grove Base Cape + Grove Temperature Sensor
// Base Cape: http://www.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series
// Temperature Sensor: http://www.seeedstudio.com/wiki/Grove_-_Temperature_Sensor
//
// Written by Toshifumi Nishinaga
// this code is public domain

var b = require('bonescript');

var getTemperature = function(){
    var AN0 = "P9_39";

    var B = 3975;
    var R0 = 10000;
    var Rs = 10000;
    var Vref = 1.8;
    var Ts = 25 + 273.15;

    var a_val = b.analogRead(AN0);
    var V = a_val * 1.8; // 0 to 1 : 0 to 1.8(V)
    var R = R0 * V / (Vref - V);
    var T = 1 / ( 1 / Ts - Math.log(R / Rs) / B ) - 273.15;

    console.log("V = " + V);
    console.log("R = " + R);
    console.log("Temperature: " + T);
}

var timer = setInterval(getTemperature, 1000);
