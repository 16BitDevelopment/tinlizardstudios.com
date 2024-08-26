function nextImg(post) {
    const images = document.getElementById("images" + post);

    let activeImg = parseInt(images.getAttribute("active-img"));

    images.children[activeImg - 1].classList.remove("active");
    activeImg += 1;
    if (activeImg > images.childElementCount) {
        activeImg = 1;
    }

    images.children[activeImg - 1].classList.add("active");

    images.setAttribute("active-img", activeImg);
}

function prevImg(post) {
    const images = document.getElementById("images" + post);

    let activeImg = parseInt(images.getAttribute("active-img"));

    images.children[activeImg - 1].classList.remove("active");
    activeImg -= 1;
    if (activeImg < 1) {
        activeImg = images.childElementCount;
    }

    images.children[activeImg - 1].classList.add("active");

    images.setAttribute("active-img", activeImg);
};