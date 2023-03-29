var greet = [
    'What are you doing that early?',
    'Good Morning',
    'Good Afternoon',
    'Good Evening'
  ][ parseInt(new Date().getHours() / 24 * 4) ];
  
  
  document.getElementById("greeting").innerHTML = greet;
  
    let time = new Date();
    time = time.getHours();
    
    let greeting = document.getElementById("greeting");

    if (time >=0&&time<12){
        greeting.innerHTML="Good Morning";
        greeting.style.color="orange";
    } else if (time >=12&&time<19){
        greeting.innerHTML= "Good Afternoon";
        greeting.style.color="pink";
    }else {
        greeting.innerHTML= "Good Evening";
    
    }

    
;



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


function validate() {
    if (document.myForm.name.value == "") {
        alert("Enter a name");
        document.myForm.name.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
}
    



function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
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

 