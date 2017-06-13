$(document).ready(function() {
    var planets = [
                ["Pluto", 0.06], 
                ["Neptune", 1.148],
                ["Uranus", 0.917],
                ["Saturn", 1.139],
                ["Jupiter", 2.640],
                ["Mars", 0.3895],
                ["Moon", 0.1655],
                ["Earth", 1],
                ["Venus", 0.9032],
                ["Mercury", 0.377],
                ["Sun", 27.9]];

    var places = document.getElementById("planets");

    for(var i = 0; i < planets.length; i++){
        var namesOfPlanets = planets[i][0];
        var option = document.createElement('option');
        option.innerHTML = namesOfPlanets;
        option.value = planets[i];
        places.appendChild(option);
    }
    $('button').on('click', calculateWeight);
    function calculateWeight() {
        var weight = document.getElementById("pounds").value;
        var place = document.getElementById("planets").selectedIndex;
        var theGravity = planets[place][1];
        var planetname = planets[place][0];
        var results = weight * theGravity;
        document.getElementById("result").innerHTML = "If you were on " + planetname + ", your weight would be " + results + "lbs!";
    }
});
