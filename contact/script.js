function copy(text, emailIcon) {
    navigator.clipboard.writeText(text);
    emailIcon.classList.add("fa-envelope-open");
    emailIcon.classList.remove("fa-envelope");
}