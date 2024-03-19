window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        logo.style.color = '#11235A'; 
    } else {
        logo.style.color = 'white';
    }

    var headerElements = document.querySelector('.header-elements'); 
    if (scrollPosition > 100) {
        headerElements.style.color = '#11235A';
        headerElements.style.fontWeight = "600";
    } else {
        headerElements.style.color = 'white'; 
        headerElements.style.fontWeight = "400";
    }
});
