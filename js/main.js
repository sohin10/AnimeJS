document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        anime
         .timeline({})
         .add({
            targets: ".circle, .rand_circle, .more_circle",
            width: 0,
            height: 0,
            opacity: 0,
            easing: "easeInOutQuad",
            duration:3000
          })

          .add(
            {
             targets: ".title, .#btn",
             opacity: 0,
             easing: "easeInOutQuad",
             duration:2000
            }, 
            "-=2000"
          )

          .add(
            {
                
                opacity: 1 ,
                complete: (anime) => {
                    document.querySelector(".second_content").style.display = "flex";
                    document.querySelector(".first_content").style.display = "none";

                },
            },
            "-=2000"
           )


          .add(
            {
                targets: ".right_bg",
                width: [0, "700px"],
                duration:1500
            },
         )
         .add(
            {
             targets: ".app_img",
             translateX:[200,0],
             opacity: [0, 1],
             duration: 1500
            },
            "-=1000"
          )

          .add(
            {
             targets: ".text_wrapper, .download ",
             translateX:[200,0],
             opacity: [0 ,1],
             duration: 1500
            },
            "-=3000"
           )


           .add(
            {
             targets: ".prod_circle",
             translateX:[200,0],
             opacity: [0 ,1],
             duration: 1500
            },
            "-=1000"
           )

           .add(
            {
             targets: ".home",
             translateX:[200,0],
             opacity: [0 ,1],
             duration: 1500
            },
            "-=3000"
           );
           
    });
});
