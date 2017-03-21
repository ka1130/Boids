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
            [400, 200],
            [150, 100],
            [100, 180],
            [300, 320],
            [270, 200],
            [120, 120],
            [430, 180]
        ];

        let x = 0;
        let y = 0;

        let speedX = 0;
        let speedY = 0;

        const MAX_SPEED = 5;
        const MAX_DISTANCE = 15;

        let boids = [];

        // Add a Boid class
        class Boid {
            constructor(x1, y1, speedX1, speedY1) {
                this.x = x1;
                this.y = y1;
                this.speedX = speedX1;
                this.speedY = speedY1;
            }
        }

        function setBoids(array) {
            boids = [];
            array.forEach(element => {
                let boid = new Boid(element[0], element[1], speedX, speedY);
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
            drawBoids(boids);
        }

        resizeCanvas();

        // Draw initial Boids
        function drawBoids(boids) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            boids.forEach(boid => {
                // [x, y] = boid;
                console.log(boid);

                cohesion(boid);
                separation(boid);
                alignment(boid);
                modifyPosition(boid);

                ctx.fillStyle = "#efffcd";
                ctx.fill();

                ctx.beginPath();
                ctx.arc(boid.x, boid.y, 5, 0, 2 * Math.PI);
                ctx.closePath();

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

            drawBoids(boids);

            window.requestAnimationFrame(animateBoid);

        }

        // Function COHESION
        function cohesion(boid) {
            let centerX = 0;
            let centerY = 0;

            boids.forEach(element => {
                // we count all boids except for the one passed as an argument
                if (element != boid) {
                    centerX += element.x;
                    centerY += element.y;
                }
            });

            centerX = centerX / (boids.length - 1);
            centerY = centerY / (boids.length - 1);

            // we take only 10% of the value to move the boid towards center
            boid.speedX += (centerX - boid.x) * 0.1;
            boid.speedY += (centerY - boid.y) * 0.1;
        }

        // Calculate distance between the boids - necessary for the separation function
        function calculateDistance(boid1, boid2) {
            // we need to make use of the Pythagoras’ theorem
            return Math.sqrt(Math.pow((boid2.x - boid1.x), 2) + Math.pow((boid2.y - boid1.y), 2));

        }

        // Function SEPARATION
        function separation(boid) {
            boids.forEach(element => {
                if (element != boid) {
                    let distance = calculateDistance(boid, element);
                    if (distance < MAX_DISTANCE) {
                        boid.speedX -= element.x - boid.x;
                        boid.speedY -= element.y - boid.y;
                    }
                }
            });
        }

        // Function ALIGNMENT
        function alignment(boid) {
            let velocityX = 0;
            let velocityY = 0;

            boids.forEach(element => {
                // we count all boids except for the one passed as an argument
                if (element != boid) {
                    velocityX += element.speedX;
                    velocityY += element.speedY;
                }
            });

            velocityX = velocityX / (boids.length - 1);
            velocityY = velocityY / (boids.length - 1);
            boid.speedX += velocityX / 8;
            boid.speedY += velocityY / 8;

        }

        // Calculate position basing on cohesion, separation and alignment
        function modifyPosition(boid) {

            // maximum speed, otherwise they move too fast
            if (boid.speedX > MAX_SPEED) {
                boid.speedX = MAX_SPEED;
            } else if (boid.speedX < -MAX_SPEED) {
                boid.speedX = -MAX_SPEED;
            }

            if (boid.speedY > MAX_SPEED) {
                boid.speedY = MAX_SPEED;
            } else if (boid.speedY < -MAX_SPEED) {
                boid.speedY = -MAX_SPEED;
            }

            boid.x += boid.speedX;
            boid.y += boid.speedY;
            if (boid.x <= 0 || boid.x >= canvas.width) {
                boid.speedX = -boid.speedX;
            }
            if (boid.y <= 0 || boid.y >= canvas.height) {
                boid.speedY = -boid.speedY;
            }
        }








        //end
    });
})();