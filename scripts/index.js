// Chile variables
let clHrs = document.getElementById("clHrs");
let clMin = document.getElementById("clMin");
let clSec = document.getElementById("clSec");

// Mexican variables
let mxHrs = document.getElementById("mxHrs");
let mxMin = document.getElementById("mxMin");
let mxSec = document.getElementById("mxSec");

setInterval(() => {
// catching the current time from the device
let currentTimeNow = new Date();

// Calculating the current hour of Chile
let localTime = currentTimeNow.getTime();
let localOffset = currentTimeNow.getTimezoneOffset() * 60000;
let utc = localTime + localOffset;
let clOffset = -3; // UTC of Chile
let cl = utc + (3600000 * clOffset);
let clTimeNow = new Date(cl); // <-- current chilean hour

// Calculating the current hour of Mexico
let mxOffset = -6; // UTC of Mexico
let mx = utc + (3600000 * mxOffset);
let mxTimeNow = new Date(mx); // <-- current mexican hour

clHrs.innerHTML = ('0'+clTimeNow.getHours()).slice(-2);
clMin.innerHTML = ('0'+clTimeNow.getMinutes()).slice(-2);
clSec.innerHTML = ('0'+clTimeNow.getSeconds()).slice(-2);

mxHrs.innerHTML = ('0'+mxTimeNow.getHours()).slice(-2);
mxMin.innerHTML = ('0'+mxTimeNow.getMinutes()).slice(-2); 
mxSec.innerHTML = ('0'+mxTimeNow.getSeconds()).slice(-2);
},1000);    
