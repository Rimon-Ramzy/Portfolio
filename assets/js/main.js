let typing = new Typed(".typing", {
  strings: ["fron end developer", "graphic designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
})


let personalImg = document.querySelector(".personal-img img")
let personalPopup = document.querySelector(".personal-popup")
let personalPopupImg = document.querySelector(".personal-popup img")
console.log(personalImg);
personalImg.addEventListener("click", () => {
  personalPopup.style.opacity = "1"
  personalPopup.style.transform = "scale(1)"
})
personalPopup.addEventListener("click", (e) => {
  if (e.target.dataset.personal == 'popup') {
    personalPopup.style.opacity = "0"
    personalPopup.style.transform = "scale(0)"
  }
})
// document.addEventListener("keyup", (e) => {
//   console.log(e);
//   if (key === 'Escape') {
//     console.log("hi");
//   }
// })




let activeProgress = document.querySelectorAll(".active-progress")
let skillsSection = document.getElementById("skills")
window.addEventListener("scroll", () => {
  // Skills Offset Top
  let offsetTop = skillsSection.offsetTop

  // Skills Outer Height
  let outerHeight = skillsSection.offsetHeight

  // Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windoSrollTop = this.pageYOffset;

  if (windoSrollTop > (outerHeight + offsetTop - windowHeight)) {
    activeProgress.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    })
  }
})









// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "Rimon-Awad",
//     Password: "RemonRamzy2001",
//     To: 'remonramzy764@gmail.com',
//     From: document.getElementById("email").value,
//     Subject: "New Contact From Enquiry",
//     Body: "And this is the body"
//   }).then(
//     message => alert(message)
//   );
// }
// function reset() {
//   alert("hi")
// }
// let form = document.querySelector("form");
// form.addEventListener("submit", () => {
//   sendEmail();
//   reset();
//   return false;
// })

// import express from 'express';
// const app = express();

// app.get('/mycoolapp/', function (req, res) {
//   res.send("Hello from the root application URL");
// });

// app.get('/mycoolapp/test/', function (req, res) {
//   res.send("Hello from the 'test' URL");
// });

// app.listen(0, () => console.log('Application is running'));




// 675E8F543C741D6AEF36892ECE2D303FE930B2F984EB485788561D7D377EB6324F3E45E62CBACEE6F812CDF95BAF12DC    =>   api key
// D12E29A8BDFF4E935C1AFA1098C53AA1FF11    =>    password
// remonramzy764@gmail.com     =>  username
// smtp.elasticemail.com





