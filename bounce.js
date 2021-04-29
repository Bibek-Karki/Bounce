window.onload = function(){
    var canvas = document.getElementById("bounce");
    var ctx = canvas.getContext("2d");
    var x = 0;
    var y = 0;
    var dx = 1;
    var dy = -1;

    draw();

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(x, y, 10, 10);
        ctx.fillStyle = "cyan";
        ctx.fill();
        ctx.closePath();

        if(x + dx > canvas.width-10){
            dx = -dx;
        }
        if(x + dx < 0){
            dx = -dx;
        }
        if(y + dy > canvas.height-10){
            dy = -dy;
        }
        if(y + dy < 0){
            dy = -dy;
        }
        x += dx;
        y += dy;
    }
    setInterval(draw, 1)
}

