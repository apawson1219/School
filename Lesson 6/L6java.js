function weather() {
    var Wtemprature = 30;
    var Wspeed = 12;
    var Wchill1 = (35.74 + .6215 - 35.75);
    var Wchill2 = (.4275 * Wtemprature);
    var Wchill3 = Math.pow(Wspeed,.16)
    var Wchilldone = (Wchill1 * Wchill3) + (Wchill2 * Wchill3);
    var Wchilldoneround = Math.round(Wchilldone);
    document.getElementById("chill").innerHTML = Wchilldoneround;
    
}