// let togglebtn = document.querySelector(".tbtn");
// let nav = document.querySelector(".navbar");
// let icon = document.querySelector(".fa-bars");
// togglebtn.addEventListener("click",function(){
//     nav.classList.toggle("nav_toggle");
//     if(nav.classList.contains("nav_toggle")== true){
//         icon.classList.remove("fa-bars")
//         icon.classList.add("fa-close")
//     }else{
//         icon.classList.remove("fa-close")
//         icon.classList.add("fa-bars ")
//     }
// })

$(document).ready(function(){
    $icon=$(".fa-bars");
    $(".tbtn").click(function(){
    $(".navbar").toggleClass("nav_toggle");
    if($(".navbar").hasClass("nav_toggle")==true){
        $icon.removeClass("fa-bars")
        $icon.addClass("fa-close")
    }else{
        $icon.removeClass("fa-close")
        $icon.addClass("fa-bars")
    }
})
})

