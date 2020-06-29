        document.querySelector("#login_field").value="test@test.com"
        document.querySelector("#password").value="test"
        document.querySelector("input.btn.btn-primary.btn-block").click()
        document.querySelector("input.btn.btn-primary.btn-block").dispatchEvent(new Event('submit' , {'bubbles':true}))



