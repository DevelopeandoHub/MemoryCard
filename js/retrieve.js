window.onload = () => {
    const textarea = document.getElementById("textarea");
    const findButton = document.getElementById("findbutton");

    findButton.addEventListener("click", () => {
        let valueToShow = localStorage.getItem(searchKey.value);
        textarea.value = valueToShow;
    })
}