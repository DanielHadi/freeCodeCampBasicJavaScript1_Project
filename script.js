const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    console.log(textInput.value);
    if (textInput.value === ""){
        alert("Please input a value");
        return;
    } else if (textInput.value.length === 1){
        changeTrueResult(textInput.value);
        return;
    } else {
        const realInput = cleanInputString(textInput.value.toLowerCase());
        console.log(textInput.value[0]);
        if (realInput === realInput.split("").reverse().join("")){
            changeTrueResult(textInput.value);
        } else {
            changeFalseResult(textInput.value);
        }
    }
});

function cleanInputString(str){
    const regex = /[^a-z0-9]/gi;
    return str.replace(regex, '');
}

function changeTrueResult(e){
    result.innerText = `${e} is a palindrome`;
}

function changeFalseResult(e){
    result.innerText = `${e} is not a palindrome`;
}