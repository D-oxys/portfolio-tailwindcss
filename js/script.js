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

// SHETS API
        const scriptURL =
            'https://script.google.com/macros/s/AKfycbxj5xyRzrH8KhRl9QXVYKfqrwi6sUUkQGkBg4gW9YUczLy063aqDxEcvBWGMZjiTaiqKA/exec';
        const form = document.forms['tailwind-contact-form'];
        const btnKirim = document.querySelector('.btn-kirim');
        const btnAllert = document.querySelector('.btn-allert');
        const btnLoading = document.querySelector('.btn-loading');
        var alert_del = document.querySelectorAll('.alert-del');
        alert_del.forEach((x) =>
            x.addEventListener('click', function () {
                x.parentElement.classList.toggle('hidden');
            })
        );

        form.addEventListener('submit', e => {
            e.preventDefault()
            btnKirim.classList.toggle('hidden');
            btnLoading.classList.toggle('hidden');
            fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(form)
                })
                .then(response => {
                    btnKirim.classList.toggle('hidden');
                    btnLoading.classList.toggle('hidden');
                    btnAllert.classList.toggle('hidden');
                    form.reset();
                    console.log('Success!', response);
                })
                .catch(error => console.error('Error!', error.message));
        })