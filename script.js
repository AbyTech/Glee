// script.js
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('nav-active');
    });
});





let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
    themeToggler.classList.toggle('active');
}
window.onscroll = () =>{
    themeToggler.classList.remove('active');
}

let btn = document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{

    btn.onclick = () =>{
        let color = btn.style.backgroundColor;
        document.querySelector(':root').style.setProperty('--main-color',color);
    }
});





// FOR FORM SUBMISSION
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = document.querySelector('input[placeholder="Full Name"]').value;
  const email = document.querySelector('input[placeholder="Email Address"]').value;
  const mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
  const emailSubject = document.querySelector('input[placeholder="Email Subject"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  const mailToLink = `mailto:abrahamisaacjames22@gmail.com?subject=${emailSubject}&body=Name: ${fullName}%0AEmail: ${email}%0AMobile Number: ${mobileNumber}%0AMessage: ${message}`;

  window.location.href = mailToLink;
});