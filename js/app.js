document.addEventListener('DOMContentLoaded', () => {
    let counts = document.querySelectorAll('.experience__top span')
    let progressBars = document.querySelectorAll('.skill__el');
    let expElements = document.querySelectorAll('.exp__element');
    let qustions = document.querySelectorAll('.Q');
    const sections = document.querySelectorAll(".section");
    const submit = document.querySelector('#btn');
    let observerOptions = {
        root: document.querySelector('#scrollPage'),
        rootMargin: '-10% 0px -10%',
        threshold: .5
    }
    
    let observer = new IntersectionObserver(elements => {
        for (let el of elements) {
            if (el.isIntersecting) {
                if (el.target.classList[0] === 'section'){
                    menuHandler(el);
                }
                if (el.target.classList[0] === 'skill__el'){
                    if (el.target.classList[1] != 'visited'){
                        el.target.classList.add('visited');
                        let circles = el.target.querySelectorAll('circle');
                        let numbers = el.target.querySelector('.h2 span');
                        let length = circles[0].getTotalLength();
                        let perc = circles[0].dataset.percentage;
                        for (const circle of circles) {
                            circle.style.strokeDashoffset = length - ((length * perc) / 100);
                            circle.style.opacity = 1;
                        }
    
                        let i = 0;
                        let increase = setInterval( function() { 
                            if ( i <= perc){
                                numbers.innerHTML = i;
                                i++;
                            } else {
                                clearInterval(increase);
                            }
                        },1000 / perc);
                    }
                }
                if (el.target.classList[0] === 'exp__element'){
                    el.target.classList.add('visible');
                }

            }
        }
    }, observerOptions);

    const menuHandler = (section) => {
        const id = section.target.id;
        const currentlyActive = document.querySelector('.scroll-menu i.active');
        const shouldBeActive = document.querySelector('.scroll-menu i[data-name=' + id + ']');
    
        if (currentlyActive) {
            currentlyActive.classList.remove('active');
        }
        if (shouldBeActive) {
            shouldBeActive.classList.add('active');
        }
    }

    for (const section of sections) {
        observer.observe(section);
    }

    for (const bar of progressBars) {
        observer.observe(bar);
    }

    for (const exp of expElements) {
        observer.observe(exp);
    }

    for (const qustion of qustions) {
        qustion.addEventListener('click', () => {
            qustion.classList.toggle('active');
        })
    }

    function zwalnianeOdliczanie(odliczanie, el) {
		function odliczaj(i, el) {
			if (i <= el.dataset.count) {
				el.innerHTML = i;
				setTimeout(function () {
					odliczaj(i + 1, el);
				}, 1000 / (el.dataset.count - i));
			}
		}
		odliczaj(odliczanie, el);
	}
    for (const el of counts) {
        zwalnianeOdliczanie(0, el);
    }

    // btn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     Email.send({
    //         Host : "smtp.gmail.com",
    //         Username : "szymonminko.web@gmail.com",
    //         Password : "password",
    //         To : 'szymonminko.web@gmail.com',
    //         From : "you@isp.com",
    //         Subject : "This is the subject",
    //         Body : "And this is the body"
    //     }).then(
    //       message => alert(message)
    //     );
    // })
      
})