var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '13'){
        console.log("Shift and Enter together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById('current_width').innerHTML = block_image_width;
        document.getElementById('current_height').innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '8'){
        console.log("Shift and BackSpace together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById('current_width').innerHTML = block_image_width;
        document.getElementById('current_height').innerHTML = block_image_height;
    }
    if(keyPressed == '37'){
        console.log('Left');
        left();
    }
    if(keyPressed == '38'){
        console.log('Up');
        up();
    }
    if(keyPressed == '39'){
        console.log('Right');
        right();
    }
    if(keyPressed == '40'){
        console.log('Down');
        down();
    }
    if(keyPressed == '67'){
        console.log('C');
        new_image('cloud.jpg');
    }
    if(keyPressed == '68'){
        console.log('D');
        new_image('dark_green.png');
    }
    if(keyPressed == '71'){
        console.log('G');
        new_image('ground.png');
    }
    if(keyPressed == '76'){
        console.log('L');
        new_image('light_green.png');
    }
    if(keyPressed == '82'){
        console.log('R');
        new_image('roof.jpg');
    }
    if(keyPressed == '84'){
        console.log('T');
        new_image('trunk.jpg');
    }
    if(keyPressed == '85'){
        console.log('U');
        new_image('unique.png');
    }
    if(keyPressed == '87'){
        console.log('W');
        new_image('wall.jpg');
    }
    if(keyPressed == '89'){
        console.log('Y');
        new_image('yellow_wall.png');
    }
}

function up(){
    if(player_y>=0){
        player_y = player_y - block_image_height;
        console.log("player's y = "+player_y + " player's x ="+ player_x);
        console.log("block image height = "+ block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=550){
        player_y = player_y + block_image_height;
        console.log("player's y = "+player_y + " player's x ="+ player_x);
        console.log("block image height = "+ block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x = player_x - block_image_width;
        console.log("player's y = "+player_y + " player's x ="+ player_x);
        console.log("block image width = "+ block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=925){
        player_x = player_x + block_image_width;
        console.log("player's y = "+player_y + " player's x ="+ player_x);
        console.log("block image width = "+ block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}