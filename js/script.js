window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_container_item_menu'),
    menuItem = document.querySelectorAll('.nav_container_item_menu_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})