const messages = [
  "Wishing you good luck today 🌟",
  "You are the light of my life ✨",
  "Hope you have a wonderful day ☀️",
  "Thinking of you 💖",
  "You make me smile 😊",
  "Sending positive vibes your way ✨",
  "I love you ❤️",
  "You are amazing 😄",
  "Keep being awesome 💫",
  "A little note to make you smile 😘",
  "You brighten my day 🌞",
  "Remember, you are special 💛",
  "Have a cozy day ☕",
  "You are truly wonderful 🌸",
  "Sending you a virtual hug 🤗",
  "Hope today brings you joy 🎁",
  "You are my favorite person 🌟",
  "Stay happy and cheerful 😊",
  "You are kind and caring 💖",
  "Wishing you lots of smiles 😄",
  "You light up my world ✨",
  "Have a magical day 🌠",
  "Thinking of you always 💛",
  "Merry Christmas Eve! 🎄"
];

const calendar = document.getElementById("calendar");
const today = new Date(2025, 10, 15);
const currentDay = today.getMonth() === 11 ? today.getDate() : 0;

messages.forEach((msg, i) => {
    const door = document.createElement("div");
    door.className = "door";

    door.innerHTML = `
        <span>${i + 1}</span>
        <div class="message">${msg}</div>
    `;

    if (i + 1 <= currentDay) {
        door.addEventListener("click", () => {
            door.classList.toggle("open");
        });
    } else {
        door.style.opacity = "0.4";
        door.style.pointerEvents = "none";

        const countdown = document.createElement("div");
        countdown.className = "countdown";

        function updateCountdown() {
            const unlockDate = new Date(today.getFullYear(), 11, i + 1);
            const diff = unlockDate - new Date();

            if (diff <= 0) {
                countdown.textContent = "Unlocked!";
                door.style.opacity = "1";
                door.style.pointerEvents = "auto";
                return;
            }

            const hours = Math.floor(diff / 1000 / 60 / 60);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            countdown.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);

        door.appendChild(countdown);
    }

    calendar.appendChild(door);
});


