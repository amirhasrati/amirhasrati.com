const home = document.querySelector('#home');
const roadmap = document.querySelector('#roadmap');
const projects = document.querySelector('#projects')
const about = document.querySelector('#about');
const contact = document.querySelector('#contact')

const navbarHome = document.querySelector('#home #navbar');
const navbarRoadmap = document.querySelector('#roadmap #navbar');
const navbarProjects = document.querySelector('#projects #navbar')
const navbarAbout = document.querySelector('#about #navbar');
const navbarContact = document.querySelector('#contact #navbar')


// Current page:


if(window.location.href.includes('home')) {
    const currentBtn = navbarHome.querySelector('#buttons').children[0];
    currentBtn.className = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";

} else if(window.location.href.includes('projects')) {
    const currentBtn = navbarProjects.querySelector('#buttons').children[1];
    currentBtn.className = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";

} else if(window.location.href.includes('roadmap')) {
    const currentBtn = navbarRoadmap.querySelector('#buttons').children[2];
    currentBtn.className = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";

} else if(window.location.href.includes('about')) {
    const currentBtn = navbarAbout.querySelector('#buttons').children[4];
    currentBtn.className = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";

} else if(window.location.href.includes('contact')) {
    const currentBtn = navbarContact.querySelector('#buttons').children[5];
    currentBtn.className = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
} 

// mobile menu
// if(window.location.href.includes('home')) {
//     navbarHome.className = "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium";
// }

