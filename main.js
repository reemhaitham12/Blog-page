window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log('Scroll Position:', scrollTop); 
    if (scrollTop > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
});



