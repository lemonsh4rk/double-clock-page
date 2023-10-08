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

clHrs.innerHTML = clTimeNow.getHours();
clMin.innerHTML = clTimeNow.getMinutes();
clSec.innerHTML = clTimeNow.getSeconds();

mxHrs.innerHTML = mxTimeNow.getHours();
mxMin.innerHTML = mxTimeNow.getMinutes(); 
mxSec.innerHTML = mxTimeNow.getSeconds();
},1000);
