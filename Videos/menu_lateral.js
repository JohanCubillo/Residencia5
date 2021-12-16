// <!-- Script importante para que funcione el menu lateral -->


    const button = document.querySelector(".video");
    const close = document.querySelector(".close");
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector(".didier");




    button.addEventListener('click', () => {
        video.play();
        trailer.style.visibility = "visible";
        trailer.style.opacity = 1;




    });

    close.addEventListener('click', () => {
        trailer.style.visibility = "hidden";
        trailer.style.opacity = 0;
        video.pause();
        video.currentTime = 0;
    });

  



