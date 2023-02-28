let content = document.querySelector(".content");
let timeNow = new Date().getHours();
console.log (timeNow);
let greetings = time >= 5 && timeNow < 12 ? "Good Morning" 
: timeNow >= 12 && timeNow < 18 ? "Good Afternoon"
: "Good Evening"; 
console.log (greeting);
content.innerHTML = `<h1>${greeting}</h1>`
 
