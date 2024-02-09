let textArea = document.querySelector("#textarea");
let totalChars = document.querySelector("#total-chars");
let remainingChars = document.querySelector("#remaining-chars");

textArea.addEventListener("keyup", ()=>{
    updateCharlen();
})



updateCharlen = () => {
    totalChars.innerHTML = textArea.value.length;
    remainingChars.innerHTML = textArea.getAttribute("maxlength") - textArea.value.length;
}

