window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var headerElements = document.querySelector('.header-elements');
    var scrollPosition = window.scrollY;
    var pageHeight = window.innerHeight * 2;

    if (scrollPosition > pageHeight) {
        logo.style.color = 'white';
    } else {
        if (scrollPosition > 100) {
            logo.style.color = '#11235A';
        } else {
            logo.style.color = 'white';
        }
    }

    if (scrollPosition > 100) {
        headerElements.style.color = '#11235A';
        headerElements.style.fontWeight = "600";
    } else {
        headerElements.style.color = 'white'; 
        headerElements.style.fontWeight = "400";
    }
});
