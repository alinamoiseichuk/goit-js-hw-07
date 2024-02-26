const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const element = event.currentTarget.elements;

    const info = {
        email: element.email.value.trim(),
        password: element.password.value.trim()
    };
    
    if (element.email.value.trim() === "" || element.password.value.trim() === "") {
        alert ('All form fields must be filled in')
    } else {
      console.log(info)  
    };
   
    event.currentTarget.reset();
}
