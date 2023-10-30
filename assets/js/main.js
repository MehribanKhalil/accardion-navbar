const hamburgerBtn = document.querySelector(".hamburger_menu")
const subMenu =document.getElementById('sub_nav')
const accardionHeading = document.querySelectorAll(".accardion_heading")
let currentMenu = null;

// task1 .navbari yazin   toggle klik etmek olsun
hamburgerBtn.addEventListener("click" ,()=>{
    hamburgerBtn.classList.toggle("active")
    subMenu.classList.toggle('sub_active')
})


// task2 .cardionlariniz olsun ve her birine klik edende acilsin 

accardionHeading.forEach(oneHeading => {

    console.log(oneHeading);

    oneHeading.addEventListener("click", () => {
        let accardionContent = oneHeading.nextElementSibling;


        accardionHeading.forEach(newHeading => {
            if (newHeading !== oneHeading) {
                const newHeadingContent = newHeading.nextElementSibling;
                newHeadingContent.classList.remove('accardion-active');
            } else{
                accardionContent.classList.toggle('accardion-active');

            }
        });
    });
});