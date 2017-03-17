(function() {
    document.addEventListener("DOMContentLoaded", function() {

        // Define variables
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const canvasContainer = document.getElementById("canvasContainer");
        const aside = canvasContainer.previousElementSibling;

        // Array with initial Boids
        const initialBoids = [
            [200, 200],
            [300, 100],
            [800, 500],
            [500, 600]
        ];

        const initialBoids2 = [
            [250, 250],
            [150, 150],
            [200, 300],
            [400, 200]
        ];

        let [boid1, boid2, boid3, boid4] = initialBoids;
        console.log(boid1, boid2, boid3, boid4);

        let x = 0;
        let y = 0;

        let speed = 5;

        // Make canvas 100% width and 100% height
        resizeCanvas();

        window.addEventListener("resize", resizeCanvas, false);

        function resizeCanvas() {
            canvas.width = window.innerWidth * .8;
            canvas.height = window.innerHeight;

            drawInitialBoid(initialBoids);
        }

        resizeCanvas();

        // Add Boid class

        class Boid {
            constructor(x, y, speed) {
                this.x = x;
                this.y = y;
                this.speed = speed;
            }
        }

        function setBoids(array) {
            let boids = [];

            array.forEach(element => {
                let boid = new Boid(...element, 5);
                boids.push(boid);
            });

            console.log(boids);
        }

        setBoids(initialBoids2);






        // Draw initial Boids
        function drawInitialBoid(...boids) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            initialBoids.forEach(boid => {
                [x, y] = boid;

                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.closePath;

                ctx.fillStyle = "#efffcd";
                ctx.fill();
            });

        }

        // drawInitialBoid(initialBoids);

        // Get coordinates of the clicked position
        // function getXY(event) {
        //     x = event.clientX;
        //     y = event.clientY;

        //     // Get width and height of the aside to count coordinates on canvas only
        //     let asW = aside.offsetWidth;

        //     x = x - asW;
        // }

        // Animate on Shift-Click
        canvasContainer.addEventListener("click", function(event) {

            if (event.shiftKey) {
                animateBoid();
            }

        }, false);

        // Animate Boid


        function animateBoid() {
            // ctx.clearRect(x, y, canvas.width, canvas.height);

            reqAnimFrame = window.requestAnimationFrame;

            reqAnimFrame(animateBoid);

            x += speed;

            if (x <= 0 || x >= canvas.width) {
                speed = -speed;
            }

            drawInitialBoid(initialBoids);

        }








        //end
    });
})();