function onChecked() {
    var menuIcon = document.getElementById('check-box')
    var header = document.getElementsByClassName("header");
    header[0].classList.toggle('header1');

    var sideBar = document.getElementsByClassName('side-bar');
    sideBar[0].classList.toggle('side-bar-expand');

    var sideMenuItems = document.querySelectorAll('.side-menu-item > div');
    sideMenuItems.forEach(element => {
        element.classList.toggle('side-menu-item-text-expand');
    });
}