document.addEventListener("readystatechange", ()=>{
    if(event.target.readyState === "complete"){
        console.log("complete")
        initApp()
    }
}
)


const initApp = ()=>{
    const menuColseBtn = document.querySelector(".close-menu-btn");
    const mobileNavLinks = document.querySelector(".mobile-nav-links")
    const menuOpenBtn = document.querySelector(".open-menu-btn")
    menuColseBtn.addEventListener("click",()=>{
        mobileNavLinks.style.display = "none"
        menuColseBtn.style.display = "none"
        menuOpenBtn.style.display = "block"

    })

    menuOpenBtn.addEventListener("click",()=>{
        mobileNavLinks.style.display = "flex"
        menuColseBtn.style.display = "block"
        menuOpenBtn.style.display = "none"
    })
    console.log(menuColseBtn)
}