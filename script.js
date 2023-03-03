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
    Host : "smtp.elasticemail.com",
    Username : "professional.martinez@gmail.com",
    Password : "astlee8898$$",
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

 