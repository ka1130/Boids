(function() {
    document.addEventListener("DOMContentLoaded", function() {

        // Define variables

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const canvasContainer = document.getElementById("canvasContainer");
        const aside = canvasContainer.previousElementSibling;

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

        // Get coordinates of the clicked position
        function getXY(event) {
            let x = event.clientX;
            let y = event.clientY;

            // Get width and height of the aside to count coordinates on canvas only
            let a = aside.offsetWidth;

            x = x - a;

            drawBoid(x, y);
        }

        // Draw Boid on mouseclick

        canvasContainer.addEventListener("click", getXY, false);

        canvasContainer.addEventListener("click", function(event) {

            if (event.shiftKey) {
                animateBoid();
            }

        }, false);

        // Animate Boid

        function animateBoid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }








        //end
    });
})();