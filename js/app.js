document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.scroll-menu a');
    let observerOptions = {
        root: document.querySelector('#scrollPage'),
        rootMargin: '0px',
        threshold: 0.5
    }
    
    let observer = new IntersectionObserver(elements => {
        for (let el of elements) {
            if (el.isIntersecting) {
                for (const menuItem of menuItems) {
                    if (menuItem.dataset.name == el.target.getAttribute("id")){
                        menuItem.classList.add('active');
                    } else {
                        menuItem.classList.remove('active');
                    }
                    
                }
            }
        }
    }, observerOptions);
    
    const sections = document.querySelectorAll(".section");
    for (const section of sections) {
        observer.observe(section);
    }
})