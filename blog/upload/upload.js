const formEl = document.getElementById("form");
const paraInput = document.getElementById("para");
const subjectInput = document.getElementById("subject");
const submitGroup = document.getElementById("submit-group");



formEl.onsubmit = (function(e) {
    e.preventDefault();

    if (paraInput.value == "" || subjectInput.value == "") {
        return;
    }

    const dateNow = new Date();

    let params = {
        subject: subjectInput.value,
        date: (dateNow.getDate() + "/" + dateNow.getMonth() + "/" + dateNow.getFullYear()).toString(),
        para: paraInput.value,
    };

    submitGroup.classList.add("loading");
    submitGroup.classList.remove("sent");
    submitGroup.classList.remove("error");

    emailjs.send("service_ffh1rdf", "template_6su3fl4", params).then(
        (response) => {
            submitGroup.classList.add("sent");
            submitGroup.classList.remove("loading");

            paraInput.value = "";
            subjectInput.value = "";
        },
        (error) => {
            submitGroup.classList.add("error");
            submitGroup.classList.remove("loading");

            paraInput.value = "";
            subjectInput.value = "";
        }
    );
});