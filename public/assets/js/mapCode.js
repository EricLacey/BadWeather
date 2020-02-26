//https://www.codicode.com/art/how_to_Draw_on_a_html5_canvas_with_a_mouse.aspx

var ctx;
//TODO add image file search
//let img = document.getElementByID("TODO: PUT WHATEVER NAME")

function InitMap() {
    ctx = document.getElementById('mapCanvas').getContext("2d");

    console.log("Initialized map")

}

function DrawMap(x,y) {
    ctx = document.getElementById('mapCanvas').getContext("2d");
   
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    //TODO add image file draw for map

    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(x + ctx.canvas.width/2, y + ctx.canvas.height/2, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    

}

