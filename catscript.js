document.addEventListener('DOMContentLoaded', function() {
    const ul = document.querySelector('.defilant');
    const lis = ul.querySelectorAll('li');
    let clone = ul.innerHTML;
    ul.innerHTML += clone; // Clone and append the list items to the list for seamless scroll

    lis.forEach((li, index) => {
        li.style.animationDelay = `${index * 2}s`; // Delay each list item's animation for a cascading effect
    });
});

