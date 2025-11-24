const messages = [
  "Wishing you joy! 🎉", "Have a magical December! ✨", "Warm hugs to you! 🤗",
  "Believe in miracles! ⭐", "You are loved ❤️", "Enjoy a cozy day! ☕",
  "Smile, it's Christmas time! 😄", "You're doing amazing! 🌟", "Treat yourself today! 🍪",
  "Spread kindness 💖", "Sing a carol! 🎶", "Light a candle 🕯️",
  "Bake something sweet 🧁", "Make a wish! 🌠", "Wrap a gift 🎁",
  "Watch a holiday movie 🎬", "Go for a winter walk ❄️", "Decorate your space 🎄",
  "Call someone you miss ☎️", "Share laughter 😂", "Read a cozy book 📚",
  "Drink hot chocolate 🍫", "Be grateful 🙏", "Merry Christmas Eve! 🎅"
];

const calendar = document.getElementById("calendar");

const today = new Date();
const currentDay = today.getMonth() === 11 ? today.getDate() : 0;

const today = new Date();
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
  }("click", () => {
    door.classList.toggle("open");
  });

  // Add countdown if locked
if (i + 1 > currentDay) {
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
  door.style.opacity = "0.4";
  door.style.pointerEvents = "none";
}

calendar.appendChild(door);
});
/* Countdown styling */
.countdown {
  position: absolute !important;
  bottom: 0.5vh !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: auto !important;
  text-align: center;
  font-size: clamp(0.7rem, 1.3vw, 1.1rem);
  color: #4b0000;
  pointer-events: none;
  white-space: nowrap;
}

/* Make the door number larger */
.door span {
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  font-weight: bold;
  z-index: 2;
  pointer-events: none;
}
