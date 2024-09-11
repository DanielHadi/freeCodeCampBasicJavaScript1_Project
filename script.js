const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    console.log(textInput.value);
    if (textInput.value === ""){
        alert("Please input a value");
        return;
    } else if (textInput.value.length === 1){
        changeResult(textInput.value);
        return;
    }
});

function changeResult(e){
    result.innerText = `${e} is a palindrome`;
}