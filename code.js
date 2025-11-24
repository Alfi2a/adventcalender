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
