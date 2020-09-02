const navSlide = () => {
    const c = document.getElementById("check");
    const ul = document.querySelector("ul");
    /* const burger = document.querySelector(".burger");
    const nav = document.querySelector(".left-side");
    const navLinks = document.querySelectorAll(".left-side div");
    const doc = document.querySelector("body");*/

    c.addEventListener("click", () => {

        if (c.checked == true) {
            //alert("ok");

            ul.classList.toggle("nav-active");
            //ul.classList.
            //console.log("GOD");
            //c.checked = false;
        } else {
            ul.classList.remove("nav-active");
        }
        //console.log("GOD");
    });
}

navSlide()


/*
else {
        ul.classList.toggle("nav-de-active");
        //c.checked = true;
        console.log("BAD");
    }
const navSlide = () => {}
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
                                                          link.style.animation = `leftSideFade 2s ease forwards ${index/7}s`;
                                                      }

                                                      //console.log(index / 7);
                                                  });
                                              });*/