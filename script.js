function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_39xrlgo","template_sbawup5",parms).then(alert("Email Sent! Please be sure you included your email/phone in the message field."))
}