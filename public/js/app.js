const home = document.querySelector('#home');
const roadmap = document.querySelector('#roadmap');

const navbarHome = document.querySelector('#home #navbar');
const navbarRoadmap = document.querySelector('#roadmap #navbar');

// Current page:


if(window.location.href.includes('home')) {
    const currentBtn = navbarHome.querySelector('#buttons').children[0];
    currentBtn.className = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";

} else if(window.location.href.includes('roadmap')) {
    const currentBtn = navbarRoadmap.querySelector('#buttons').children[2];
    currentBtn.className = "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
}

// mobile menu
// if(window.location.href.includes('home')) {
//     navbarHome.className = "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium";
// }

