canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width =120;
car1_height = 70
car1_image ="car1.png";
car1_x = 10;
car1_y = 10;

car2_width =120;
car2_height = 70
car2_image ="car2.jpg"
car2_x = 10;
car2_y = 100;

background_image="racing.jpg";

function add(){
    add_back= new Image();
    add_back.onload=up_back;
    add_back.src=background_image;

    add_car1= new Image();
    add_car1.onload=up_car1;
    add_car1.src=car1_image;

    add_car2= new Image();
    add_car2.onload=up_car2;
    add_car2.src=car2_image;

}

function up_back(){
    ctx.drawImage(add_back, 0, 0, canvas.width, canvas.height);
}


function up_car1(){
    ctx.drawImage(add_car1, car1_x, car1_y, car1_width, car1_height);
}

function up_car2(){
    ctx.drawImage(add_car2, car2_x, car2_y, car2_width, car2_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        car1_up();
        console.log("up");
    }

    if(keyPressed=='40'){
        car1_down();
        console.log("down");
    }

    if(keyPressed=='37'){
        car1_left();
        console.log("left");
    }

    if(keyPressed=='39'){
        car1_right();
        console.log("right");
    }

    if(keyPressed=='87'){
        car2_up();
        console.log("w");
    }

    if(keyPressed=='87'){
        car2_up();
        console.log("w");
    }

    if(keyPressed=='83'){
        car2_down();
        console.log("s");
    }

    if(keyPressed=='65'){
        car2_left();
        console.log("a");
    }

    if(keyPressed=='68'){
        car2_right();
        console.log("d");
    }
}

        