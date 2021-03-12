var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_img="";
var block_img="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y, left:player_x
        });
        canvas.add(player_img);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img=Img;
        block_img.scaleToWidth(block_img_width);
        block_img.scaleToHeight(block_img_height);
        block_img.set({
            top:player_y, left:player_x
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == '80'){
        console.log("shift and p have been pressed");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey == true && keypress == '77'){
        console.log("shift and m have been pressed");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypress == '38'){
        up();
        console.log("up key has been pressed");
    }
    if(keypress == '40'){
        down();
        console.log("down key has been pressed");
    }
    if(keypress == '37'){
        left();
        console.log("left key has been pressed");
    }
    if(keypress == '39'){
        right();
        console.log("right key has been pressed");
    }
    if(keypress == '70'){
        console.log("Face");
        new_image('ironman_face.png');
    }
    if(keypress == '66'){
        console.log("Body");
        new_image('spider_body.png');
    }
    if(keypress == '76'){
        console.log("Leg");
        new_image('hulk_legs.png');
    }
    if(keypress == '82'){
        console.log("Right Hand");
        new_image('hulk_right_hand.png');
    }
    if(keypress == '72'){
        console.log("Left Hand");
        new_image('captain_america_left_hand.png');
    }
}