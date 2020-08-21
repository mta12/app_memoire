const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.left-side');
    const navLinks = document.querySelectorAll('.left-side div');
    const doc = document.querySelector('body');

    burger.addEventListener('click', () => {
        // Ajout d'un css au bloc
        nav.classList.toggle('nav-active');

        //Animer l'apparition du burger
        navLinks.forEach((link, index) => {
            //console.log(link, index);
            // continue l'animation meme apres le click
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `leftSideFade 0.5s ease forwards ${index/7}s`;
            }

            //console.log(index / 7);
        });
    });

}

navSlide();