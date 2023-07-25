// function changebg_header(){
//     // let changebg = document.getElementById("headertop");
//     let changebg = document. querySelector("header")
//     let current = window.scrollY;
//     if(current>0){
//         changebg.classList.add("header_fixed")
//     }else{
//         changebg.classList.remove("header_fixed")
//     } 
// }
// window.addEventListener("scroll",changebg_header)
$(document).ready(function(){
    $(window).scroll(function(){
        $current = $(this).scrollTop();
        if($current>0){
            $("header").addClass("header_fixed")
        }else{
            $("header").removeClass("header_fixed")
        }
    })
})