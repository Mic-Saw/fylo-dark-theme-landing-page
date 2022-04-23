const email = document.querySelector('input');
const err = document.querySelector('.err');
const send = document.querySelector('.send');

email.addEventListener('keyup', e => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    e.preventDefault();
    if (pattern.test(e.target.value)) {
        err.style.opacity = '0';
    } else {
        err.style.opacity = '1';
    }
})