gsap.from(".heading",{duration:1,scale:0,opacity:0},{duration:1,scale:1,opacity:1})
gsap.from(".errors",{duration:1,scale:0,opacity:0},{duration:1,scale:1,opacity:1,delay:2})
gsap.from(".content-display-container",{duration:1,scale:0,opacity:0},{duration:1,scale:1,opacity:1,delay:.4})
gsap.from(".text-area",{duration:1,scale:0,opacity:0},{duration:1,scale:1,opacity:1,delay:.6})
gsap.from(".start-button",{duration:1,scale:0,opacity:0},{duration:1,scale:1,opacity:1,delay:1})

let quotes = ["And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
"Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day.",
"For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.",
"So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.",
"What, then, shall we say in response to these things? If God is for us, who can be against us?",
"Do not turn me over to the desire of my foes, for false witnesses rise up against me, spouting malicious accusations.",
"Therefore encourage one another and build each other up, just as in fact you are doing.",
"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
"Greater love has no one than this: to lay down one’s life for one’s friends."];

function start(){
document.getElementById("startBtn").classList.add("d-none")
//let restartBtn = document.getElementById('restartBtn')
//restartBtn.classList.remove("d-none")
let random_index = Math.ceil(Math.random()*(quotes.length-1));
console.log(random_index);
console.log(quotes[random_index]);
randomQuote = quotes[random_index];
document.getElementById("content").innerHTML = randomQuote;
document.getElementById('startBtn').innerHTML = "Restart";
document.getElementById('startBtn').style.backgroundColor = "white";
document.getElementById('startBtn').style.color = "black";
document.getElementById('startBtn').style.boxShadow = "goldenrod 4px 4px 5px";
var sec = 29;
var timer = setInterval(function(){
document.getElementById('timer').innerHTML= sec+"s";
sec--;
if (sec < 0) {
clearInterval(timer);
document.getElementById('textArea').setAttribute("readonly","readonly");
/*let timeUpContainer = document.getElementById('timeUp');
let element = document.createElement("div");
element.classList.add("time-up");
element.id="TimeUp"
element.innerText = 'Time is up!';
timeUpContainer.appendChild(element);*/
alert("Time is Up!")


}
}, 1000);

/*let Restartbtn = document.getElementById('restartBtn');
let btnElement = document.createElement("button")
btnElement.id = "Restartbtn";
btnElement.onclick = () =>{
window.location.reload()
document.getElementById('textArea').removeAttribute("readonly");
}
btnElement.innerText = "Restart"
Restartbtn.appendChild(btnElement);*/

}
/*function restart(){
let random_index1 = Math.ceil(Math.random()*(quotes.length-1));
console.log(random_index1);
console.log(quotes[random_index1]);
randomQuote1 = quotes[random_index1];
document.getElementById("content").innerHTML = randomQuote1;
let i =0
document.getElementById("errorsCount").innerHTML=0
let currentErrorCount=0;
let a=[];
let typedText = document.getElementById('textArea').value;
a.push(typedText[typedText.length-1]);
//console.log(a);
console.log(randomQuote1[i],typedText[typedText.length-1]);
if(randomQuote1[i]===typedText[typedText.length-1]){
document.getElementById("accuracy").innerHTML = (((typedText.length-currentErrorCount)/typedText.length)*100).toFixed(2)

i++;
}
else{
currentErrorCount++
document.getElementById("errorsCount").innerHTML = currentErrorCount
document.getElementById("accuracy").innerHTML = (((typedText.length-currentErrorCount)/typedText.length)*100).toFixed(2)

i++

}
let random_index = Math.ceil(Math.random()*(quotes.length-1));
console.log(random_index);
console.log(quotes[random_index]);
randomQuote = quotes[random_index];
document.getElementById("content").innerHTML = randomQuote;
document.getElementById("textArea").removeAttribute("readonly","readonly")
document.getElementById("textArea").value=" "
document.getElementById("errorsCount").innerHTML=0
document.getElementById("accuracy").innerHTML=100

var sec = 30;
var timer = setInterval(function(){
document.getElementById('timer').innerHTML= sec+"s";
sec--;
if (sec < 0) {
clearInterval(timer);
document.getElementById('textArea').setAttribute("readonly","readonly");
/*let timeUpContainer = document.getElementById('timeUp');
let element = document.createElement("div");
element.classList.add("time-up");
element.id="TimeUp"
element.innerText = 'Time is up!';
timeUpContainer.appendChild(element);
alert("Time is Up!")


}
}, 1000);

} */
let i =0
let currentErrorCount=parseInt(document.getElementById("errorsCount").innerHTML);
let a=[];
function typing(){

let typedText = document.getElementById('textArea').value;
a.push(typedText[typedText.length-1]);
//console.log(a);
console.log(randomQuote[i],typedText[typedText.length-1]);
if(randomQuote[i]===typedText[typedText.length-1]){
document.getElementById("accuracy").innerHTML = (((typedText.length-currentErrorCount)/typedText.length)*100).toFixed(2)

i++;
}
else{
currentErrorCount++
document.getElementById("errorsCount").innerHTML = currentErrorCount
document.getElementById("accuracy").innerHTML = (((typedText.length-currentErrorCount)/typedText.length)*100).toFixed(2)

i++

}

}