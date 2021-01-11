const navLink = ()=>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");


    burger.addEventListener("click", ()=>{
        // đưa NAV vào ra
        nav.classList.toggle("nav-activate");

        links.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ""
            }else{
                //ease giống như là độ ma sát
                // tên animation - thời gian thực hiện - ease/ tốc độ tăng giần trong bao lâu - fowards là sau khi hoàn thành animation thì giữ lại thuộc tính của animation. bình thường thì sau animation, mọi thứ sẽ hoàn về ban đầu
                //
                link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7) + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });
}
navLink();