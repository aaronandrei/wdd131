let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;

document.addEventListener("DOMContentLoaded", () => {
    const words = [" SMARTER", "  BETTER", "  KINDER", " HAPPIER"];
    let index = 0;

    function rotateWords() {
        const verbElement = document.querySelector(".verbs");
        if (verbElement) {
            verbElement.textContent = words[index];
            index = (index + 1) % words.length;
        }
    }

    setInterval(rotateWords, 3000);
});

let visitCount = localStorage.getItem('visitCount');

if (!visitCount) {
    visitCount = 0;
}

visitCount++;

localStorage.setItem('visitCount', visitCount);

window.onload = function () {
    const visitElement = document.createElement("p");
    visitElement.textContent = `You have visited this page ${visitCount} times.`;
    document.body.insertBefore(visitElement, document.querySelector(".hero"));
};