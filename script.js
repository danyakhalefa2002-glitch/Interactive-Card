/* 1. الوصول إلى عناصر HTML */
const robotImage = document.getElementById("robotImage");
const robotTitle = document.querySelector("#robotTitle");
const message = document.getElementById("message");
const card = document.querySelector(".card");
const details = document.getElementById("details");

/* 2. تحديد الحالة الابتدائية */
let currentMood = "happy";

const changeMoodBtn = document.getElementById("changeMoodBtn");

/* 3. عرض التفاصيل عند تحميل الصفحة */
details.innerHTML = "ENERGY LEVEL: 100%";

/* 4. تغيير حالة الروبوت عند الضغط على الزر */
changeMoodBtn.addEventListener("click", function () {
  /* الانتقال من Happy إلى Curious */
  if (currentMood === "happy") {
    card.classList.remove(`is-${currentMood}`);
    currentMood = "curious";
    card.classList.add(`is-${currentMood}`);
    robotImage.src = `images/byte-${currentMood}.png`;
    robotTitle.textContent = "Let's Explore!";
    message.textContent =
      "Hmm... what's that over there?\nI have a million questions to ask!";

    details.innerHTML = "CURIOSITY LEVEL: HIGH";

    /* الانتقال من Curious إلى Sleepy */
  } else if (currentMood === "curious") {
    card.classList.remove(`is-${currentMood}`);
    currentMood = "sleepy";
    card.classList.add(`is-${currentMood}`);
    robotImage.src = `images/byte-${currentMood}.png`;
    robotTitle.textContent = "Time to Recharge!";
    message.textContent =
      "My circuits are getting sleepy...\nEven robots need a little rest! 😴";

    details.innerHTML = "ENERGY LEVEL: LOW";

    /* العودة من Sleepy إلى Happy */
  } else {
    card.classList.remove(`is-${currentMood}`);
    currentMood = "happy";
    card.classList.add(`is-${currentMood}`);
    robotImage.src = `images/byte-${currentMood}.png`;
    robotTitle.textContent = "Hello, Human!";
    message.textContent =
      "I'm feeling amazing today! ✨\nLet's make something awesome together!";

    details.innerHTML = "ENERGY LEVEL: 100%";
  }
});
