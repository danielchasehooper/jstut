

(function(){
    "use strict";
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 500;
    canvas.style="margin:auto; padding: 0; position: absolute; top: 0;bottom: 0; left: 0;right: 0;display: block; border:1px solid gray;";

    let body = document.createElement('body');
    body.appendChild(canvas);
    body.style="background-color:black";
    document.body = body;
    
    const ctx = canvas.getContext("2d");
    
    setColor(255,0,0);

    function drawRectangle(x,y,w,h) {
        ctx.fillRect(x, y, w, h);
    }

    function drawCircle(x,y,r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }

    let turtleInfo = {x: 40,y:40,t:0, commands:[]};

    function turtle(x,y,t) {
        const s = 22;
        const r = 8;

        
        ctx.save();
        ctx.translate(x,y);

        if(typeof t === "number") 
            ctx.rotate(t * Math.PI / 180);

        drawCircle(0,0,30);
        drawCircle(+s,+s,r);
        drawCircle(-s,+s,r);
        drawCircle(+s,-s,r);
        drawCircle(-s,-s,r);

        drawCircle(0,-34,r);

        ctx.restore();
    }

    function setColor(r,g,b){
        ctx.fillStyle = "rgb("+r+","+g+","+b+")";
    }

    Object.assign(window, {
        ctx,
        drawCircle,
        drawRectangle,
        setColor,
        turtle
    });

    window.addEventListener('load',function(){
        let b = document.getElementsByTagName("body")[1];
        b.parentNode.removeChild(b);

        if (typeof window.animate === "function") {
            setInterval(function() {
                let oldColor = ctx.fillStyle;
                ctx.fillStyle = "black";
                ctx.fillRect(0,0,600,500);
                ctx.fillStyle = oldColor;
                animate();
            }, 16);
        }
    });


}());
