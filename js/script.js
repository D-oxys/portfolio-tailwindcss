// ham
const ham = document.querySelector('#ham');
const navMenu = document.querySelector('#nav-menu')

ham.addEventListener('click', function () {
    ham.classList.toggle('ham-active')
    navMenu.classList.toggle('hidden')
});

// navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}

// dark mode toggle 
const darkToggle = document.querySelector("#dark-toggle");
const hmtl = document.querySelector("html");

darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
        hmtl.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        hmtl.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// toggel local storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}