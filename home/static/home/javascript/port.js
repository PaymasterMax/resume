$().ready(function (e) {
        var div1 = document.querySelector("#first-slide")
        var div2 = document.querySelector("#second-slide");
        var controller = 1

        setInterval(function (e) {
            if (controller == 0) {
                div1.setAttribute("style" , "display:block")
                div2.setAttribute("style" , "display:none")
                controller+=1;
            }else {
                div1.setAttribute("style" , "display:none")
                div2.setAttribute("style" , "display:block")
                controller=0;
            }
        } , 5000)

})
