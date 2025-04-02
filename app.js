const qaList = {
  "salom": "Salom! Qanday yordam bera olaman?",
  "isming nima": "Mening ismim JavaBot!",
  "nima gap": "Men yaxshi, rahmat! Siz-chi?",
  "qaysi tilda ishlaysan": "Men JavaScript tilida yozilganman.",
  "bugun havo qanday": "Men havo ma'lumotlarini bilmayman, lekin internetdan tekshirib ko'ring!",
  "sen kimsan": "Men oddiy chatbotman!",
  "nimadir maslahat ber": "Ko'proq kitob o'qing va dasturlash bilan shug'ullaning!",
  "qanaqa filmlar yaxshi": "Sizga qaysi janr yoqadi? Action, Comedy yoki Sci-Fi?",
  "eng yaxshi dasturlash tili qaysi": "Bu sizning maqsadingizga bog'liq! Frontend uchun JavaScript, Backend uchun Python yoki C# yaxshi tanlov!",
  "o'zingni yaxshi his qilyapsanmi": "Men har doim bir xil! Lekin sizning kayfiyatingiz qanday?",
  "html nima": "HTML - bu veb-sahifalarni yaratish uchun ishlatiladigan belgilash tili.",
  "css nima": "CSS - bu veb-sahifalarni bezash va ularning dizaynini boshqarish uchun ishlatiladigan uslub tili.",
  "javascript nima": "JavaScript - bu veb-saytlarni dinamik va interaktiv qilish uchun ishlatiladigan dasturlash tili.",
  "frontend nima": "Frontend - bu foydalanuvchilar ko‘radigan va ishlatadigan veb-sahifa qismi.",
  "backend nima": "Backend - bu veb-saytning server tomoni, ma'lumotlarni qayta ishlaydi va boshqaradi.",
  "python haqida ayt": "Python - bu universal dasturlash tili bo‘lib, AI, ma'lumotlar tahlili va veb-ishlanmalar uchun ishlatiladi.",
  "c# haqida ayt": "C# - bu Microsoft tomonidan ishlab chiqilgan dasturlash tili bo‘lib, ko‘p hollarda .NET platformasida ishlatiladi.",
  "java haqida ayt": "Java - bu kuchli dasturlash tili bo‘lib, mobil ilovalar va korporativ tizimlar uchun ishlatiladi."
};

function chatbot(userInput) {
  userInput = userInput.toLowerCase().trim();
  return qaList[userInput] || "Kechirasiz, tushunmadim.";
}

function getResponse() {
  const inputField = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userQuestion = inputField.value;

  if (!userQuestion) return;

  // Input qiymatini chatga qo'shish
  chatbox.innerHTML += `<p class="text-blue-400"><strong>Siz:</strong> ${userQuestion}</p>`;

  // Chatbot javobini qo'shish
  chatbox.innerHTML += `<p class="text-green-400"><strong>JavaBot:</strong> ${chatbot(userQuestion)}</p>`;

  // Chatbox oxiriga scroll qilish
  chatbox.scrollTop = chatbox.scrollHeight;

  // Inputni bo'shatish
  inputField.value = "";
}

// Yulduzlar animatsiyasi
const canvas = document.getElementById("galaxyCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 500;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(drawStars);
}

drawStars();
