
//sets up resume modal
var resume = document.querySelectorAll("i.fa-file");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

for (i=0; i<resume.length; i++) {
    resume[i].addEventListener("click", () => {
        openModal();
    })
}

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


//sets zoom-in of mobile preview on click
var mobilePreviews = document.querySelectorAll(".mobile-preview");

for (i=0; i<mobilePreviews.length; i++) {
    mobilePreviews[i].addEventListener("click", (e) => {
        e.target.classList.toggle("mobile-preview-zoom");
    })
}


//sets up 3d carousel

window.addEventListener("load", () => {
    carousel(document.querySelector(".carousel"));
})

function carousel(root) {
    var container = root.querySelector(".item-container"),
        nav = root.querySelector("nav"),
        headings = container.children,
        n = headings.length,
        html = document.querySelector("html"),
        gap = parseFloat(getComputedStyle(html).width) > 640 ? 20 : 8,
        theta = 2 * Math.PI / n,
        currHead = 0
    ;

    setupCarousel(n, parseFloat(getComputedStyle(headings[0]).width));
        window.addEventListener("resize", () => {
            setupCarousel(n, parseFloat(getComputedStyle(headings[0]).width))
        });
        
        setupNavigation();

        function setupCarousel(n, s) {
            var apothem = s / (2 * Math.tan(Math.PI / n));
            container.style.transformOrigin = `50% 50%`;
            container.style.transform = `translateZ(${- apothem}px)`;
            headings[0].style.transform = `translateZ(${apothem}px)`;

            for (i=0; i < n; i++) {
                headings[i].style.padding = `0 ${gap}px`;
            
            }
            for (i=0; i < n; i++) {
                headings[i].style.transformOrigin = `50% 50%`;
                headings[i].style.transform = `rotateY(${(i * theta) * (180 / Math.PI)}deg) translateZ(${apothem}px)`;
                
            } 

            rotateCarousel(currHead);
        }

        function setupNavigation() {
            nav.addEventListener("click", onClick, true);

            function onClick(e) {
                e.stopPropagation();

                var t = e.target;
                if (t.tagName.toUpperCase() != 'BUTTON') {
                    if (t.tagName.toUpperCase() != 'I')
                    return;
                }
                 
                if (t.classList.contains('next')) {
                    removeZoom();
                    currHead++;
                }
                if (t.classList.contains('fa-chevron-right')) {
                    removeZoom();
                    currHead++;
                }
                if (t.classList.contains('prev')) {
                    removeZoom();
                    currHead--;
                }
                if (t.classList.contains('fa-chevron-left')) {
                    removeZoom();
                    currHead--;
                }

                function removeZoom() {
                    var zoomed = document.querySelector(".mobile-preview-zoom");
                    zoomed && zoomed.classList.remove("mobile-preview-zoom");
                }

                rotateCarousel(currHead);
            }
        }

        function rotateCarousel(headingIndex) {
            var apothem = parseFloat(getComputedStyle(headings[0]).width) / (2 * Math.tan(Math.PI / n));
            container.style.transform = `translateZ(${- apothem}px) rotateY(${(headingIndex * - theta) * (180 / Math.PI)}deg)`;
        }
}

//skills section 

var skills = document.querySelectorAll(".skills--main li");

for (i = 0; i < skills.length; i++) {
    skills[i].addEventListener("click", (e) => {
        e.currentTarget.children[0].classList.toggle("skill-width");
        e.currentTarget.children[3].classList.toggle("skill-height");
        e.currentTarget.children[1].classList.toggle("opacity");
        e.currentTarget.children[2].classList.toggle("opacity");
    })
}



//Hobbies and interest section 

var hobbies = document.querySelectorAll(".hobbies--hobby img");

for (i = 0; i < hobbies.length; i++) {
    hobbies[i].addEventListener("click", (e) => {

        //hide and diminish any previous hobbies
        var revealed = document.querySelector(".reveal-text");
        var expanded = document.querySelector(".expand-box");
        expanded.classList.remove("expand-box");
        revealed.classList.remove("reveal-text");

        //reveal and expand hobby
        e.target.parentNode.classList.add("expand-box");
        e.target.previousElementSibling.classList.add("reveal-text");
    })
}