
var mainModule = (function () {

    var domElements;
    window.onload = function () {
        domElements = {
            expandMenu: document.getElementsByClassName("expand-menu")[0],
            headerTitle: document.getElementsByClassName("title-img")[0],
            menuButton: document.getElementsByClassName("drop-btn")[0],
            headerBlock: document.getElementsByClassName("header-block")[0],
            contentBlock: document.getElementsByClassName("content")[0],
            navigationList: document.getElementsByClassName("expand-menu")[0],
            navigationItems: document.getElementsByClassName("list-item"),
        };
    };

    function openMenu() {
        domElements.headerTitle.setAttribute("src", "images/logo/logo-rules-white.svg");
        domElements.headerBlock.classList.add('header-block-open-menu');
        domElements.expandMenu.classList.add('expand-menu-open');
        domElements.menuButton.classList.add('drop-btn-open');
    };

    function closeMenu() {
        domElements.headerTitle.setAttribute("src", "images/logo/logo-rules-dark.svg");
        domElements.headerBlock.classList.remove('header-block-open-menu');
        domElements.expandMenu.classList.remove('expand-menu-open');
        domElements.menuButton.classList.remove('drop-btn-open');
    };

    function showHideMenu() {

        if (domElements.expandMenu.classList[1] !== 'expand-menu-open') {
            openMenu();
        } else {
            closeMenu();
        }
    };

    function expandMenu(index) {
        closeMenu();
    }
    return {
        showHideMenu: showHideMenu,
        expandMenu: expandMenu
    }

})()
