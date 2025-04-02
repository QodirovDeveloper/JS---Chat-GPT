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
  "java haqida ayt": "Java - bu kuchli dasturlash tili bo‘lib, mobil ilovalar va korporativ tizimlar uchun ishlatiladi.",
  "dasturlash o'rganish uchun nima qilish kerak": "Ko‘p mashq qiling, loyihalar yarating va real kod yozing!",
  "sun'iy intellekt haqida ayt": "Sun'iy intellekt - bu kompyuterlarning o‘z-o‘zidan o‘rganishi va qaror qabul qilishi jarayoni.",
  "git nima": "Git - bu versiyalarni boshqarish tizimi bo‘lib, kodni samarali boshqarish imkonini beradi.",
  "github nima": "GitHub - bu kod almashish va jamoaviy ishlash uchun Git platformasi.",
  "algoritm nima": "Algoritm - bu muammoni yechish uchun aniq ketma-ketlikdagi qadamlar to‘plami.",
  "mysql nima": "MySQL - bu ommabop ochiq kodli ma'lumotlar bazasi boshqaruv tizimi.",
  "mongodb nima": "MongoDB - bu hujjatga asoslangan NoSQL ma'lumotlar bazasi.",
  "react.js nima": "React.js - bu UI yaratish uchun Facebook tomonidan ishlab chiqilgan JavaScript kutubxonasi.",
  "node.js nima": "Node.js - bu server tomonida JavaScript ishlashiga imkon beruvchi platforma.",
  "api nima": "API - bu dasturlar bir-biri bilan bog‘lanishiga imkon beruvchi interfeys.",
  "rest api nima": "REST API - bu ma'lumotlarni almashish uchun ishlatiladigan standart veb-xizmat.",
  "json nima": "JSON - bu ma'lumotlarni almashish uchun qulay format.",
  "typescript nima": "TypeScript - bu JavaScript ning tiplangan versiyasi bo‘lib, yanada xavfsizroq kod yozishga yordam beradi.",
  "tezlik bilan qanday o‘rganish mumkin": "Ko‘proq amaliyot qiling va real loyihalar ustida ishlang.",
  "kuchli dasturchi bo‘lish uchun nima qilish kerak": "Loyihalar yarating, jamoaviy ishlang va yangi texnologiyalarni o‘rganing.",
  "AI nima": "Sun'iy intellekt - bu kompyuterlarning o‘z-o‘zidan o‘rganishi va qaror qabul qilishi jarayoni.",
  "eng yaxshi framework qaysi": "Bu maqsadingizga bog‘liq. Frontend uchun React yoki Vue.js, backend uchun Express.js yoki .NET.",
  "mobil dasturlash haqida ayting": "Mobil dasturlar Android uchun Kotlin yoki Java, iOS uchun Swift yoki Flutter orqali yoziladi.",
  "karyera qilish uchun qanday yo‘nalish tanlash kerak": "Sizga yoqadigan va talab yuqori bo‘lgan sohani tanlang, masalan AI, Web, Cybersecurity yoki Data Science.",
  "Docker nima": "Docker - bu ilovalarni konteynerlar ichida ishlashiga imkon beruvchi platforma.",
  "Kubernetes nima": "Kubernetes - bu Docker konteynerlarini boshqarish tizimi.",
  "blokcheyn nima": "Blokcheyn - bu markazlashmagan ma'lumotlar bazasi texnologiyasi.",
  "kriptovalyuta haqida ayting": "Kriptovalyuta - bu blokcheyn asosida ishlovchi raqamli valyutadir.",
  "bitcoin nima": "Bitcoin - bu eng mashhur kriptovalyuta bo‘lib, markazlashmagan to‘lov tizimiga asoslangan.",
  "dasturlashni necha yoshda o‘rganish kerak": "Dasturlashni har qanday yoshda o‘rganish mumkin, faqat qiziqish bo‘lsa yetarli!"
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

  chatbox.innerHTML += `<p><strong>Siz:</strong> ${userQuestion}</p>`;
  chatbox.innerHTML += `<p><strong>JavaBot:</strong> ${chatbot(userQuestion)}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
  inputField.value = "";
}


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
