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

var mobilePreviews = document.querySelectorAll(".mobile-preview");

for (i=0; i<mobilePreviews.length; i++) {
    mobilePreviews[i].addEventListener("click", (e) => {
        e.target.classList.toggle("mobile-preview-zoom");
    })
}


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
