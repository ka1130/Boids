(function() {
    document.addEventListener("DOMContentLoaded", function() {

        // Define variables

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const canvasContainer = document.getElementById("canvasContainer");
        const aside = canvasContainer.previousElementSibling;

        let x = 100;
        let y = 75;

        // Make canvas 100% width and 100% height
        resizeCanvas();

        window.addEventListener("resize", resizeCanvas, false);

        function resizeCanvas() {
            canvas.width = window.innerWidth * .8;
            canvas.height = window.innerHeight;

            drawBoid();
        }

        resizeCanvas();

        // Array with initial Boids

        const initialBoids = [
            [200, 200],
            [300, 100],
            [800, 500],
            [500, 900]
        ];

        let [boid1, boid2, boid3, boid4] = initialBoids;

        // Draw initial Boids

        function drawInitialBoid(...boid) {
            let [a, b] = boid; //boid's coordinates
            console.log(...boid);

            ctx.beginPath();
            ctx.arc(a, b, 5, 0, 2 * Math.PI);
            ctx.closePath;

            ctx.fillStyle = "#efffcd";
            ctx.fill();
        }

        drawInitialBoid(boid1, boid2, boid3, boid4);

        // Draw first Boid

        function drawBoid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.closePath;

            ctx.fillStyle = "#efffcd";
            ctx.fill();
        }

        // Get coordinates of the clicked position

        function getXY(event) {
            let x = event.clientX;
            let y = event.clientY;

            // Get width and height of the aside to count coordinates on canvas only
            let asW = aside.offsetWidth;

            x = x - asW;

            drawBoid();
            drawInitialBoid(boid1);
        }

        // Animate on Shift-Click

        canvasContainer.addEventListener("click", function(event) {

            if (event.shiftKey) {
                drawLoop();
            }

        }, false);

        // Animate Boid
        let vX = 2; // x-move vector
        let vY = 0; // y-move vector

        function animateBoid() {

            x += vX;
            y += vY;

            if (x > canvas.width) {
                x -= canvas.width;
            }

            if (y > canvas.height) {
                y -= canvas.height;
            }

            if (x < 0) {
                x += canvas.width;
            }

            if (y < 0) {
                y -= canvas.width;
            }
        }

        function drawLoop() {
            let frm = window.requestAnimationFrame;
            animateBoid();
            drawBoid();
            frm(drawLoop);
        }








        //end
    });
})();