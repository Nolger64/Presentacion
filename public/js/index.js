/*Español*/
const BUTSPANISH = document.getElementById("spanish");
let tittleIng = document.getElementById("tittle-ing");
let sendEmail = document.getElementById("send-email");
let textAbout1 = document.getElementById("text-about1");
let textAbout2 = document.getElementById("text-about2");
let resume = document.getElementById("resume");
const Portfolio = document.getElementById("Portfolio");
let idioma = 0;



BUTSPANISH.addEventListener('click', () => {
    if(idioma == 0){
        idioma = 1;
        tittleIng.innerHTML = "Ingeniero de sistemas";
        sendEmail.innerHTML = "Enviar correo";
        BUTSPANISH.innerHTML = "English";
        textAbout1.innerHTML = "&lt/Acerca de mi&gt";
        textAbout2.innerHTML = "Soy un diligente ingeniero de sistemas junior con 2 años de experiencia en el desarrollo de aplicaciones web. Estoy ansioso por unirme a una empresa de tecnología que crea soluciones listas para usar para clientes regionales. Tengo experiencia en el desarrollo de planes, la gestión de proyectos y la documentación del usuario.";
        resume.innerHTML = "Resumen";
    }else if(idioma = 1){
        idioma = 0
        tittleIng.innerHTML = "Systems Engineer";
        sendEmail.innerHTML = "Email me";
        BUTSPANISH.innerHTML = "Español";
        textAbout1.innerHTML = "&lt/About Me&gt";
        textAbout2.innerHTML = "I am a diligent Junior system engineer with 2 years of experience in web applications development. I am eager to join a tech company that builds out-of-the-box solutions for regional clients. I am skilled in developing plans, managing projects, and user documentation.";
        resume.innerHTML = "Resume";
    }
    
})
/*Botones de reder*/
const INSTAGRAM = document.getElementById("instagram");
const FACEBOOK = document.getElementById("facebook");
const LINKEDIN = document.getElementById("linkedin");
const WHATSAPP = document.getElementById("whatsapp");
sendEmail.onclick = () =>{
    window.open("mailto:nolgerluisrodriguezmedina@gmail.com");
}
Portfolio.onclick = () => {
    window.open("http://www.nolger.com");
}
INSTAGRAM.addEventListener('click', () => {
    window.open("https://www.instagram.com/");
})
FACEBOOK.addEventListener('click', () => {
    window.open("https://www.facebook.com/");
})
LINKEDIN.addEventListener('click', () => {
    window.open("https://www.linkedin.com/in/nolger-luis-rodriguez-medina-9b4845252/");
})
WHATSAPP.addEventListener('click', () => {
    window.open("https://api.whatsapp.com/send?phone=573126613981");
})