window.onload = () => {
    const valueToSave = document.getElementById("valueToSave");
    const savingKey = document.getElementById("savingKey");
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", () => {
        localStorage.setItem(savingKey.value, valueToSave.value);
    })
}