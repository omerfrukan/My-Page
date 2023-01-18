function navBarsBtn() {
    var x = document.getElementById('nav-aside');
    var main = document.getElementById('main-container');
    if (x.className.indexOf('nav-aside-hide') !== -1) {
        x.className = x.className.replace('nav-aside-hide', 'nav-aside-show');
        main.style.marginLeft = '120px';
    }else {
        x.className = x.className.replace('nav-aside-show', 'nav-aside-hide');
        main.style.marginLeft = 0;
    }
}