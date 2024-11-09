const emojis = [
    "😎",
    "😎",
    "🤐",
    "🤐",
    "👺",
    "👺",
    "💀",
    "💀",
    "👽",
    "👽",
    "😵‍💫",
    "😵‍💫"
];
let openCard = []; //guardar as cartas selecionadas na memória

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)); //embaralhador dos emojis

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div"); //criando uma div dinamicamente
    box.className = "item"; //classe da div
    box.innerHTML = shuffleEmojis[i]; 
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if(openCard.length < 2) {
        this.classList.add("boxOpen");
        openCard.push(this);
    }

    if (openCard.length == 2) {
        setTimeout(checkMatch, 500);
    }
}