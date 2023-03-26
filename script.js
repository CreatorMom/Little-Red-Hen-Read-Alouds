let greetingHeader = document.getElementById("greeting-header");
let timeNow = new Date().getHours();
console.log(timeNow);
let greeting = timeNow < 12 ? "Good Morning!"
: timeNow >= 12 && timeNow < 18 ? "Good Afternoon!"
: "Good Evening!";
console.log(greeting);
greetingHeader.innerHTML = `<h1>${greeting}</h1>`;


function sendEmail(){
Email.send({
    secureToken: "9cf2ccb6-744f-42f1-8889-9f94a8f080b1", 
    To : 'creatormomstorybook@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Inquiry",
    Body : "Name:" + document.getElementById("name").value
    + "<br> Email: "+ document.getElementById("email").value
    + "<br> Message:"+ document.getElementById("message").value
}).then(
    message => alert ("Message Sent!")
);
}




const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

function getQuote(){
    fetch("http://quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = data.author;
    })
}

 