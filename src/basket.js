window.addEventListener('load', (event) => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (document.documentElement.getAttribute('data-theme') === null) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    document.querySelectorAll('.navbar-collapse').forEach(el => {
        el.addEventListener('click', (ev) => {
            let targetElement = ev.target || ev.srcElement;
            targetElement = targetElement.parentElement.querySelectorAll('.navbar-items');
            targetElement.forEach(function (el) {
                el.classList.toggle('collapsed');
            })
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

    });
});


