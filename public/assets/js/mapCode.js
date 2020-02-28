//https://www.codicode.com/art/how_to_Draw_on_a_html5_canvas_with_a_mouse.aspx

let mapCTX;
let mapImage

function InitMap() {
    mapCTX = document.getElementById('mapCanvas').getContext("2d");

    console.log("Initialized map")

}

function DrawMap(x,y) {
    mapCTX = document.getElementById('mapCanvas').getContext("2d");

    mapImage = document.getElementById('mapImage')
    mapCTX.drawImage(mapImage,0,0,mapCTX.canvas.width, mapCTX.canvas.height);

    mapCTX.beginPath();
    mapCTX.strokeStyle = "#FF0000";
    mapCTX.arc(x + mapCTX.canvas.width/2, y + mapCTX.canvas.height/2, 5, 0, 2 * Math.PI);
    mapCTX.stroke();
    mapCTX.closePath();

    

}

