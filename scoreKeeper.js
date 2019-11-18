// To check if a string is only composed of whitespace
function isEmpty(a) {
    var b = "";
    for(var i = 0 ; i < a.length; i++)
        b+=' ';
    if(a==b)
        return(true);
    else
        return(false);
}
// Taking Player name as input and validating it
var Player1 = prompt("Enter the name of Player1");
while(isEmpty(Player1) === true)
    var Player1 = prompt("Please don't leave it empty");
var Player2 = prompt("Enter the name of Player2");
while(isEmpty(Player2) === true)
    var Player2 = prompt("Please don't leave it empty");
// Setting player name
document.querySelector("#p1").textContent = Player1;
document.querySelector("#p2").textContent = Player2;
//Taking input from slider
slider = document.querySelector("#setLimit");
playingTo = document.querySelector("#playingTo");
playingTo.value = 1;
playingTo.textContent = slider.value;
slider.addEventListener("change",function() {
    playingTo.textContent = slider.value;
});
// For hiding the outline which shows up on sliding using arrow keys
slider.addEventListener("keydown", function() {
    slider.style.outline = "0";
});
// handling start
sp1 = document.querySelector("#sp1");
sp2 = document.querySelector("#sp2");
start = document.querySelector("#start");
start.addEventListener("click",function() {
    slider.classList.toggle("hidden");
    start.classList.toggle("hidden");
    document.querySelector("#afterStart").classList.toggle("hidden");
    sp1.value = 0;
    sp2.value = 0;
    slider.value = parseInt(slider.value);
});
document.querySelector("#reset").addEventListener("click",function() {
    slider.classList.toggle("hidden");
    start.classList.toggle("hidden");
    document.querySelector("#afterStart").classList.toggle("hidden");
    sp1.textContent = 0;
    sp2.textContent = 0;
    playingTo.textContent = 1;
    slider.value = 1;
    sp1.value = 0;
    sp2.value = 0;
    flag = 0;
    sp1.style.color = "#2E3133";
    sp2.style.color = "#2E3133";
    document.querySelector("#result").classList.add("hidden");
    document.querySelector("div#contain p").classList.remove("hidden");
});
// checking winner
// handling increments
pt1 = document.querySelector("#pt1");
pt2 = document.querySelector("#pt2");
var flag = 0;
pt1.addEventListener("click",function() {
    if(sp1.value < parseInt(slider.value) && flag === 0) {
        sp1.value += 1;
        sp1.textContent = sp1.value;
    }
    if(sp1.value === parseInt(slider.value) && flag === 0) {
        flag = 1;
    }
    if(flag === 1) {
        sp1.style.color = "green";
        sp2.style.color = "red";
        document.querySelector("div#contain p").classList.add("hidden");
        document.querySelector("#result").classList.remove("hidden");
        document.querySelector("#result").textContent = Player1 + " won by " + (sp1.value-sp2.value) + " Points!";
    }
});
pt2.addEventListener("click",function() {
    if(sp2.value < parseInt(slider.value) && flag === 0) {
        sp2.value += 1;
        sp2.textContent = sp2.value;
    }
    if(sp2.value === parseInt(slider.value) && flag === 0) {
        flag = -1;
    }
    if(flag === -1) {
        sp1.style.color = "red";
        sp2.style.color = "green";
        document.querySelector("div#contain p").classList.add("hidden");
        document.querySelector("#result").classList.remove("hidden");
        document.querySelector("#result").textContent = Player2 + " won by " + (sp2.value-sp1.value) + " Points!";
    }
});