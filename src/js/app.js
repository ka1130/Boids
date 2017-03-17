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
            [500, 600],
            [250, 250],
            [150, 150],
            [200, 300],
            [400, 200]
        ];

        let x = 0;
        let y = 0;

        let speed = 5;

        let boids = [];

        // Add Boid class

        class Boid {
            constructor(x1, y1, speed1) {
                this.x = x1;
                this.y = y1;
                this.speed = speed1;
            }
        }

        function setBoids(array) {
            boids = [];
            array.forEach(element => {
                let boid = new Boid(element[0], element[1], 0);
                boids.push(boid);
            });
        }

        setBoids(initialBoids);

        // Make canvas 100% width and 100% height
        resizeCanvas();

        window.addEventListener("resize", resizeCanvas, false);

        function resizeCanvas() {
            canvas.width = window.innerWidth * .8;
            canvas.height = window.innerHeight;
            setBoids(initialBoids);
            drawInitialBoid(boids);
        }

        resizeCanvas();

        // Draw initial Boids
        function drawInitialBoid(boids) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            boids.forEach(boid => {
                // [x, y] = boid;
                console.log(boid);
                boid.x += speed;

                if (boid.x <= 0 || boid.x >= canvas.width) {
                    speed = -speed;
                }

                ctx.beginPath();
                ctx.arc(boid.x, boid.y, 5, 0, 2 * Math.PI);
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
            ctx.clearRect(x, y, canvas.width, canvas.height);



            drawInitialBoid(boids);

            window.requestAnimationFrame(animateBoid);

        }








        //end
    });
})();