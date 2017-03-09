(function() {
    document.addEventListener("DOMContentLoaded", function() {

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const source = new Image();
        source.src = "img/bird.svg"
        source.width = 20;
        source.height = 20;

        source.addEventListener("load", function() {
            ctx.drawImage(source, 0, 0);
        });




        //end
    });
})();