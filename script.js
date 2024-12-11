const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cardsContainer = document.getElementById("cards-container");

noBtn.addEventListener("mouseenter", () => {
    const randomX = Math.random() * 300 - 100;
    const randomY = Math.random() * 300 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

yesBtn.addEventListener("click", () => {
    cardsContainer.style.display = 'flex';
});
noBtn.addEventListener("click", () => {
   
    noBtn.textContent = "Yes";
    noBtn.style.backgroundColor = "red"; 
    cardsContainer.style.display="flex";
});




