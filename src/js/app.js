(function() {
    document.addEventListener("DOMContentLoaded", function() {

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // Make canvas 100% width and 100% height
        resizeCanvas();

        window.addEventListener("resize", resizeCanvas, false);

        function resizeCanvas() {
            canvas.width = window.innerWidth * .8;
            canvas.height = window.innerHeight;

            drawBoid();
        }

        resizeCanvas();

        // Draw first Boid
        function drawBoid(x = 100, y = 75) {
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.closePath;

            ctx.fillStyle = "#efffcd";
            ctx.fill();
        }


        // Draw Boid on mouseclick

        const canvasContainer = document.getElementById("canvasContainer");

        canvasContainer.addEventListener("click", drawBoid, false);






        //end
    });
})();