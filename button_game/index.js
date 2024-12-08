
const yesBtn = document.getElementById("yes")
const noBtn = document.getElementById("no")
yesBtn.addEventListener("click",() => {
    alert("i Love You Too 💞🥰")
})

noBtn.addEventListener("mouseenter",() => {
    moveButton()
})

const moveButton = () => {
    const maxWidth = 400;
    const maxHeight = 400;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.left = randomX +"px";
    noBtn.style.top = randomY +"px";
}