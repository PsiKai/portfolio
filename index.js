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
            var xOrigin = parseFloat(getComputedStyle(container).width) / 2;
            var yOrigin = parseFloat(getComputedStyle(container).height) / 2;
            container.style.WebkitTransformOrigin = `${xOrigin}px ${yOrigin}px ${- apothem}px`;
            container.style.transformOrigin = `${xOrigin}px ${yOrigin}px ${- apothem}px`;
            
            // container.style.transformBox = "fill-box";


            for (i=0; i < n; i++) {
                headings[i].style.padding = `0 ${gap}px`;
                // headings[i].style.backfaceVisibility = "hidden";
            }
            for (i=1; i < n; i++) {
                var origin = getComputedStyle(headings[i]);
                var originX = parseFloat(origin.width);
                var originY = parseFloat(origin.height);

                headings[i].style.WebkitTransformOrigin = `${originX / 2}px ${originY / 2}px ${- apothem}px`;
                headings[i].style.transformOrigin = `${originX / 2}px ${originY / 2}px ${- apothem}px`;
                
                headings[i].style.WebkitTransform = `rotateY(${(i * theta) * (180 / Math.PI)}deg)`;
                headings[i].style.transform = `rotateY(${(i * theta) * (180 / Math.PI)}deg)`;
                
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
            container.style.transform = `rotateY(${headingIndex * - theta}rad)`;
        }
}