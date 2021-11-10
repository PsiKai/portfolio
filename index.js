
//sets up resume modal
var resumeIcons = document.querySelectorAll("i.fa-file");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

resumeIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        openModal();
    })
})

const openModal = () => {
    setTimeout(() => {
        modal.classList.add("open");
        backdrop.classList.add("open");
    }, 200)
    
    backdrop.style.display = "block";
    modal.style.display = "block";
    
}

backdrop.addEventListener("click", () => {
    modal.classList.remove("open");
    backdrop.classList.remove("open");

    setTimeout(() => {
        backdrop.style.display = "none";
        modal.style.display = "none";
    }, 200);
    
})

const itemContainer = document.querySelector(".item-container")
setTimeout(() => {itemContainer.style.transitionDuration = "800ms"}, 500)

//sets up 3d carousel

window.addEventListener("load", () => {
    const carouselDiv = document.querySelector(".carousel")
    carousel(carouselDiv);
})

function carousel(root) {
    var container = root.querySelector(".item-container"),
        nav = root.querySelector("nav"),
        carouselCards = Array.from(container.children),
        n = carouselCards.length,
        html = document.querySelector("html"),
        gap = parseFloat(getComputedStyle(html).width) > 640 ? 24 : 8,
        theta = 2 * Math.PI / n,
        currHead = 0
    ;

    setupCarousel(n, parseFloat(getComputedStyle(carouselCards[0]).width));
        window.addEventListener("resize", () => {
            setupCarousel(n, parseFloat(getComputedStyle(carouselCards[0]).width))
        });
        
        setupNavigation();

        function setupCarousel(n, s) {
            var apothem = s / (2 * Math.tan(Math.PI / n));
            container.style.transformOrigin = `50% 50%`;
            container.style.transform = `translateZ(${- apothem}px)`;
            carouselCards[0].style.transform = `translateZ(${apothem}px)`;

            for (i=0; i < n; i++) {
                carouselCards[i].style.padding = `0 ${gap}px`;
                carouselCards[i].style.transformOrigin = `50% 50%`;
                carouselCards[i].style.transform = 
                    `
                    rotateY(${(i * theta) * (180 / Math.PI)}deg) 
                    translateZ(${apothem}px)
                    `   
            } 

            rotateCarousel(currHead);
        }

        function setupNavigation() {
            nav.addEventListener("click", onClick, true);

            function onClick(e) {
                var t = e.target.classList;

                // Rotate carousel right 
                if (t.contains('next')) {currHead++;}
                if (t.contains('fa-chevron-right')) {currHead++;}

                // Rotate carousel left 
                if (t.contains('prev')) {currHead--;}
                if (t.contains('fa-chevron-left')) {currHead--;}

                rotateCarousel(currHead);
            }
        }

        function rotateCarousel(headingIndex) {
            var apothem = parseFloat(getComputedStyle(carouselCards[0]).width) / (2 * Math.tan(Math.PI / n));

            container.style.transform = `translateZ(${- apothem}px) rotateY(${(headingIndex * - theta) * (180 / Math.PI)}deg)`;
        }
}

//skills section 

var skills = document.querySelectorAll(".skills--main li");

skills.forEach(skill => {
    skill.addEventListener("click", (e) => {
        var child = e.currentTarget.children;
        child[0].classList.toggle("skill-width");
        child[3].classList.toggle("skill-height");
        child[1].classList.toggle("opacity");
        child[2].classList.toggle("opacity");
    })
})

//Hobbies and interest section 

var hobbies = document.querySelectorAll(".hobbies--hobby img");

hobbies.forEach(hobby => {
    hobby.addEventListener("click", (e) => {

        //hide and diminish any previous hobbies
        var revealed = document.querySelector(".reveal-text");
        var expanded = document.querySelector(".expand-box");
        expanded.classList.remove("expand-box");
        revealed.classList.remove("reveal-text");

        //reveal and expand current hobby
        e.target.parentNode.classList.add("expand-box");
        e.target.previousElementSibling.classList.add("reveal-text");
    })
})

//dark mode settings 

// let root = document.documentElement;
// let darkTheme = document.querySelector(".dark-theme");
// let bio = document.querySelector(".quick-bio");
// let skillArray = Array.from(skills);
// let sourceCode = Array.from(document.querySelectorAll(".source-code"))
// let nav = Array.from(document.querySelectorAll(".nav"));
// let hobbyArray = Array.from(document.querySelectorAll(".hobbies--hobby"));
// var darkMode = false;

// darkTheme.addEventListener("click", () => {
//     if (darkMode === true) {
//         darkMode = false;
//         root.style.setProperty("--light", "#e8e8e8")
//         root.style.setProperty("--medium", "#bbbfca")
//         root.style.setProperty("--dark", "#495464")
//         root.style.setProperty("--white", "#f4f4f2")
//         bio.style.setProperty("color", "var(--dark)")
//         skillArray.forEach(skill => skill.style.setProperty("color", "var(--dark)"))
//         sourceCode.forEach(source => source.style.setProperty("color", "var(--dark)"))
//         nav.forEach(nav => nav.style.setProperty("color", "var(--dark)"))
//         hobbyArray.forEach(hobby => hobby.style.setProperty("color", "var(--dark)"))
//     } else if (darkMode === false) {
//         darkMode = true;
//         root.style.setProperty("--light", "#bbbfca")
//         root.style.setProperty("--medium", "#e8e8e8")
//         root.style.setProperty("--dark", "#f4f4f2")
//         root.style.setProperty("--white", "#495464")
//         bio.style.setProperty("color", "var(--white)")
//         skillArray.forEach(skill => skill.style.setProperty("color", "var(--white)"))
//         sourceCode.forEach(source => source.style.setProperty("color", "var(--white)"))
//         nav.forEach(nav => nav.style.setProperty("color", "var(--white)"))
//         hobbyArray.forEach(hobby => hobby.style.setProperty("color", "var(--white)"))
//     }
// })


    