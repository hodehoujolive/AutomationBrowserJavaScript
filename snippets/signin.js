function Signup(username, email, password) {
    document.querySelector("#user_login").value = username
    document.querySelector("#user_email").required
    document.querySelector("#user_email").value =email
    document.querySelector("#user_password").dispatchEvent(new Event('focus'))
    document.querySelector("#user_password").dispatchEvent(new Event('change',{
        bubbles: true
    }))
    document.querySelector("#user_password").value =password
    document.querySelector("#all_emails").click()
    document.querySelector("#all_emails").checked

}

var user = Signup("jolive","test@test.com","Jojo");

function CreatAccount(nothing){
    document.querySelector("#signup_button").click()
}

setTimeout(CreatAccount,5000,"nothing")

