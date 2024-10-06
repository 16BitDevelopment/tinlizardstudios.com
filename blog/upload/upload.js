function sendMail() {
    let params = {
        subject: document.getElementById("subject").value,
        para: document.getElementById("para").value
    };

    emailjs.send("service_ffh1rdf", "template_6su3fl4", params).then(
        (response) => {
            alert("Email Sent");
        },
        (error) => {
            alert("Email Send Failure", error);
        }
    );
}