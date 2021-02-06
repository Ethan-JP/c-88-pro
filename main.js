var canvas=new fabric.Canvas("myCanvas")
var playerX=100
var playerY=100
var blockwidth=30
var blockheight=30
var playerobject=""
var blockobject=""

function playerupdate(){
fabric.Image.fromURL("player.webp",function(img){
    playerobject=img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(150);
    playerobject.set({
        top:playerY,left:playerX
    });
    canvas.add(playerobject)
});
}

function blockupdate(block) {
fabric.Image.fromURL(block,function(img){
    blockobject=img
    blockobject.scaleToWidth(blockwidth);
    blockobject.scaleToHeight(blockheight);
    blockobject.set({
        top:playerY,left:playerX
    });
    canvas.add(blockobject)
});
}

window.addEventListener("keydown",kd)
function kd(e) {
    number=e.keyCode
    console.log(number)

    if (number==70) {
        blockupdate("hulk_face.png")
        console.log("f is pressed")
    }

    if (number==76) {
        blockupdate("ironman_legs.png")
        console.log("l is pressed")
    }

    if (number==82) {
        blockupdate("thor_right_hand.png")
        console.log("r is pressed")
    }

    if (number==72) {
        blockupdate("spiderman_left_hand.png")
        console.log("h is pressed")
    }

if (number==66) {
    blockupdate("ironman_body.png")
    console.log("b is pressed")
}

if (e.shiftKey==true && number==80) {
    blockwidth=blockwidth+10;
    blockheight=blockheight+10;
    document.getElementById("width").innerHTML=blockwidth
    document.getElementById("height").innerHTML=blockheight
    console.log("p and shift pressed together")
}

if (e.shiftKey==true && number==77) {
    blockwidth=blockwidth-10
    blockheight=blockheight-10
    document.getElementById("width").innerHTML=blockwidth
    document.getElementById("height").innerHTML=blockheight
    console.log("m and shift pressed together")
}

if (number==37) {
    left()
}
if (number==38) {
    up()
}

if (number==39) {
    right()
}

if (number==40) {
    down()
}
}

function up(){
    if (playerY>=0) {
        playerY=playerY-blockheight
        canvas.remove(playerobject)
        playerupdate()
    }
}

function down(){
    if (playerY<=500) {
        playerY=playerY+blockheight
        canvas.remove(playerobject)
        playerupdate()
    }
}

function right(){
    if (playerX<=700) {
        playerX=playerX+blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}

function left(){
    if (playerX>=0) {
        playerX=playerX-blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}