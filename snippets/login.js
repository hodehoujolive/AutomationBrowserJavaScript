var email = prompt('Enter your email')
var password = prompt('Enter your password')

function Login(email , password){

        document.querySelector("#login_field").value=email
        document.querySelector("#password").value=password

        document.querySelector("input.btn.btn-primary.btn-block").click()
        document.querySelector("input.btn.btn-primary.btn-block").dispatchEvent(new Event('submit' , {'bubbles':true}))
        }

var user = Login(email,password);

