// HUMBERGER MENU
const humb = document.querySelector('.checkbox');
const menu = document.querySelector('.menu');

humb.addEventListener('click', function () {
    menu.classList.toggle('slide');
});




// SERVICE NAVBAR
const filterItem = document.querySelector(".navService");
const mainServiceTitle = document.querySelector(".msLeft .mainServiceTitle");
const mainServiceParagraph = document.querySelector(".msLeft .mainServiceParagraph");
const mainServiceBtn = document.querySelector(".msLeft .mainServiceBtn");
const msRight = document.querySelector(".msRight");

window.onload = () => { //after window loaded
    filterItem.onclick = (selectedItem) => { //if user click on filterItem div
        if (selectedItem.target.classList.contains("item")) { //if user selected item has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
            selectedItem.target.classList.add("active"); //add that active class on user selected item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
            
            if(filterName == "kemah"){
                mainServiceTitle.innerHTML = "Berkemah bersama kami";
                mainServiceParagraph.innerHTML = "Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem ad qui eius. Neque veritatis fugiat nobis error voluptatibus perspiciatis quo. Ipsam, expedita. Ipsa voluptatem tempora quam veniam natus at?";
                msRight.setAttribute("style", "background-image: url(img/service/service1.jpg)");
            } else if(filterName == "hutan"){
                mainServiceTitle.innerHTML = "Berkelana di dalam hutan";
                mainServiceParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita.";
                msRight.setAttribute("style", "background-image: url(img/service/service2.jpg)");
            } else if(filterName == "laut"){
                mainServiceTitle.innerHTML = "Ayo menyelam";
                mainServiceParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita.";
                msRight.setAttribute("style", "background-image: url(img/service/service3.jpg))");
            } else if(filterName == "pantai"){
                mainServiceTitle.innerHTML = "Healing ni guys";
                mainServiceParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita.";
                msRight.setAttribute("style", "background-image: url(img/service/service4.jpg)");
            } else if(filterName == "gunung"){
                mainServiceTitle.innerHTML = "Butuh nanjak?";
                mainServiceParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita. iwfnhamou,zpaurc n98y 98y98 yni7r 87n98 t98m";
                msRight.setAttribute("style", "background-image: url(img/service/service5.jpg)");
            } else{
                mainServiceTitle.innerHTML = "Dekat tebing seru nih";
                mainServiceParagraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perspiciatis aperiam rem harum? Aspernatur molestias eos hic minus nostrum unde obcaecati, voluptatum neque placeat doloribus culpa officiis, quas repellat expedita. iwfnhamou,zpaurc n98y 98y98 yni7r 87n98 t98m";
                msRight.setAttribute("style", "background-image: url(img/service/service6.jpg)");
            }
            
        }
    }
    // for (let i = 0; i < filterImg.length; i++) {
    //     filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
    // }
}





// BLOG SIDEBAR HUMB MENU
const blogCheck = document.querySelector('.blogCheckbox');
const sidebar = document.querySelector('.sideBar');

blogCheck.addEventListener('click', function () {
    sidebar.classList.toggle('blogSlide');
});




// FUNGSI MEMBUAT PANGGILAN
function makeCall(){
    let tanya = confirm("Melakukan panggilan ke +62-85757115194?");
    if(tanya){ window.open('tel:085757115194'); }
    // if(tanya){ window.open('tel:085299068400'); }
}