document.querySelectorAll('.navbar-collapse').forEach( el => {
    el.addEventListener('click', (ev) => {
        let targetElement = ev.target || ev.srcElement;
        targetElement = targetElement.parentElement.querySelector('.navbar-items');
        targetElement.classList.toggle('collapsed');
    });
})