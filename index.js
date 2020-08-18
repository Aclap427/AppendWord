let wordArray = [];


let word = document.getElementById('word');
let appendBtn = document.querySelector('button').addEventListener('click', appendFunction);
let stringEl = document.querySelector('div span');


function appendFunction() {
    let wordValue = word.value;
    wordArray.push(`${wordValue}`);
    word.value = "";
    render();
}

function render() {
    stringEl.innerHTML = wordArray.join(" ");
    if (wordArray.length === 0) {
        stringEl.innerHTML = "No Phrase Yet!";
    };

}