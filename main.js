
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
            allItems: document.getElementsByClassName("items"),
            peopleListOffline: document.getElementsByClassName("people-menu-offline")[0],
            peopleList: document.getElementsByClassName("people-menu")[0],
            arrowImg: document.getElementsByClassName("arrow")[0],
            peopleItems: document.getElementsByClassName("people-list-item")
        };
        domElements.peopleListOffline.classList.remove('people-menu-offline');
        domElements.peopleList.classList.add('people-menu-hide');

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

    function findScrollingvalue(index) {

        var extraScrollingSpaceMobile = 67,
            extraScrollingSpaceDesktop = 87,
            extraScrollingSpaceDesktopSubMenu = 95,
           currentItemPosition =  domElements.allItems[index].offsetTop - 67;

        if (window.matchMedia("(min-width: 760px)").matches) {
             currentItemPosition =  domElements.allItems[index].offsetTop - 87
            if (index > 8) {
                 currentItemPosition =  domElements.allItems[index].offsetTop - 95;
            }
        }
        return currentItemPosition;
    };

    function addColorToChosenItem(index) {
        
        var element = domElements.navigationItems[index];
  
        element.removeAttribute("href");

        for (i = 0; i < domElements.navigationItems.length; i++) {
            var item = domElements.navigationItems[i];
            if (item.classList.contains('clicked-background')) {
                item.classList.remove('clicked-background');
            }
        };
        element.classList.add('clicked-background');

    }

    function expandMenu(index) {

        addColorToChosenItem(index);

        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: findScrollingvalue(index)
        });
        
        closeMenu();
    }

    function openSubMenu() {

        if (domElements.peopleList.classList.contains('people-menu-show')) {
            domElements.peopleList.classList.remove('people-menu-show');
            domElements.peopleList.classList.add('people-menu-hide');
            domElements.arrowImg.setAttribute("src", "images/buttons/arrowDown.png");
        } else {
            domElements.peopleList.classList.add('people-menu-show');
            domElements.peopleList.classList.remove('people-menu-hide');
            domElements.arrowImg.setAttribute("src", "images/buttons/arrowUp.png");
        }
    }

    return {
        showHideMenu: showHideMenu,
        openSubMenu: openSubMenu,
        expandMenu: expandMenu
    }

})()
