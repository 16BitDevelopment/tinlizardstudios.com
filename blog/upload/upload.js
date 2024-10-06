function sendMail() {
    const dateNow = new Date();

    let params = {
        subject: document.getElementById("subject").value,
        date: dateNow.getDate() + "/" + dateNow.getMonth() + "/" + dateNow.getFullYear(),
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