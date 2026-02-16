const allPaintings = document.getElementsByClassName("painting");

for (let i = 0; i < allPaintings.length; i += 1) {
    allPaintings.item(i).addEventListener("click", () => {
        allPaintings.item(i).classList.add("fullscreen");

        document.body.classList.add("noscroll");
    });
    allPaintings.item(i).children[0].addEventListener("click", (event) => {
        allPaintings.item(i).classList.remove("fullscreen");

        document.body.classList.remove("noscroll");

        event.stopPropagation();
    });
}