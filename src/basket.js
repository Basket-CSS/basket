document.querySelectorAll('.navbar-collapse').forEach(el => {
    el.addEventListener('click', (ev) => {
        let targetElement = ev.target || ev.srcElement;
        targetElement = targetElement.parentElement.querySelector('.navbar-items');
        targetElement.classList.toggle('collapsed');
    });
});

document.querySelectorAll(".darkmode-toggler").forEach(el => {
    el.onchange = () => {
        if (el.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

})