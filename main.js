var mainModule = (function () {

    var domElements;
    window.onload = function () {
        domElements = {
            expandMenu: document.getElementsByClassName("expand-menu")[0]
        };
    };

    function openMenu() {
        domElements.expandMenu.classList.add('expand-menu-open');
    };

    function closeMenu() {
        domElements.expandMenu.classList.remove('expand-menu-open');
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
