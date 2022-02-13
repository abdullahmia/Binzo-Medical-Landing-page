let navbar = document.getElementById('navbar');
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        navbar.classList.add('scroll-on');
    }else{
        navbar.classList.remove('scroll-on');
    }
}