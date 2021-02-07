/*!
  * Basket v1.0.0
  * https://getbasket.co
  *
  * Copyright (c) 2021 Omar Quazi
  * Licensed under the MIT license
 */

window.addEventListener('load', (event) => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

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

    });
});

