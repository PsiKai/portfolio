var resume = document.querySelectorAll("i.fa-file");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");

for (i=0; i<resume.length; i++) {
    resume[i].addEventListener("click", () => {
        openModal();
        console.log("clicked");
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