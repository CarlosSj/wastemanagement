window.onscroll = function() {
    var nav = document.getElementById('titles');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("titles1");
    } else {
        nav.classList.remove("titles1");
    }
}