<html>
    <head>
        <title>SuperKoch</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <h1>SuperKoch! work in progress.</h1>
        <canvas id="canv" width="800" height="100"></canvas>
        <p id="out"></p>
        <script>
            const dotMax = 100;
            const dashMax = 250;
            const spaceMax = 250;

            const canv = document.getElementById("canv");
            const output = document.getElementById("out");

            const ctx = canv.getContext("2d");

            console.log("SuperKoch!");
            var keydown = 0;
            var waitTime = 0;
            var pressTime = 0;

            var decodedValue = '';

            document.addEventListener("keydown", (event) => {
                if (!keydown)
                    keydown = true;
            });

            document.addEventListener("keyup", (event) => {
                keydown = 0;

                if (pressTime != 0) {
                    if (pressTime < dotMax) {
                        decodedValue += '.';
                    } else {
                        decodedValue += '-';
                    }
                }
            });

            setInterval(() => {
                var imageData = ctx.getImageData(1, 0, ctx.canvas.width-1, ctx.canvas.height);
                ctx.putImageData(imageData, 0, 0);
                ctx.clearRect(ctx.canvas.width-1, 0, 1, ctx.canvas.height);

                if (waitTime > spaceMax && decodedValue[decodedValue.length - 1] != ' ') {
                    decodedValue += ' ';
                }

                if (keydown == 0) {
                    waitTime += 10;
                    pressTime = 0;
                    ctx.fillStyle = "#000000";
                    ctx.fillRect(ctx.canvas.width-1, 0, 1, ctx.canvas.height);
                } else {
                    pressTime += 10;
                    waitTime = 0;
                    ctx.fillStyle = "#00AA00";
                    ctx.fillRect(ctx.canvas.width-1, 0, 1, ctx.canvas.height);
                }

                output.innerText = decodedValue;
            }, 10);
        </script>
    </body>
</html>