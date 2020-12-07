
let flag = 1
let flag1
var arr = [2]
arr[0] = []
arr[1] = []
let ctx
let width 
let height
let k = 0;
let rand1 = random(1, 2);
let rand2 = random(1, 2);
let timer;
let rectangle
let squar

let rand3 = random(3, 5);
let rand4 = random(1, 2);

// Window
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

class SquareCanv {
    constructor(x, y, velX, velY, color, width, height) {
        this.x = x
        this.y = y
        this.velX = velX
        this.velY = velY
        this.color = color
        this.width = width
        this.height = height
    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()
    }
}

// task 1
 CreateWorkspace()
// task 2
 CreateWorkspace2()

function Message(n) {
    arr[0].push(`${n}`);
    var l = new Date();
    arr[1].push(l.toLocaleString());
    localStorage.setItem('info', JSON.stringify(arr));
}
window.onload = () => {
    arr[0] = []
    arr[1] = []
    localStorage.clear()
}
btn1.onclick = function () {
    flag1 = 1
    modal.style.display = "block";

    document.querySelector("#message").textContent = 'Opened animation';
    document.querySelector("#controls").append(document.querySelector("#message"));

    Message('Opened animation');
}
btn2.onclick = function () {
    flag1 = 2
    modal2.style.display = "block";
    squar.y = 0;
    squar.x = 340;
    ctx.beginPath()
    ctx.clearRect(0, 0, 345, 180);
    squar.draw()

    document.querySelector("#message2").textContent = 'Opened animation';
    document.querySelector("#controls2").append(document.querySelector("#message2"));

    Message('Opened animation');
}
span.onclick = function () {
    modal.style.display = "none";
    Message('Closed animation');

    clearInterval(timer);
    document.querySelector('#Button').value = "►";
    document.querySelector('#Button2').value = "►";
    document.querySelector('#square').style.visibility = 'visible';
    document.querySelector('#square').style.top = '0px';
    document.querySelector('#square').style.right = '0px';
    document.querySelector('#Button').style = "font-size: 22px;";
    document.querySelector('#Button2').style = "font-size: 22px;";
    flag = 1;

    document.querySelector('#cell-5').innerHTML = ''
    for (let h = 0; h < arr[0].length; h++) {
        let li = document.createElement('li')
        li.textContent = `${arr[0][h]} : ${arr[1][h]}`
        document.querySelector('#cell-5').append(li)
    }

}
span2.onclick = function () {
    modal2.style.display = "none";

    Message('Closed animation');
    clearInterval(timer);
    document.querySelector('#Button').value = "►";
    document.querySelector('#Button2').value = "►";
    document.querySelector('#Button').style = "font-size: 22px;";
    document.querySelector('#square').style.visibility = 'visible';
    document.querySelector('#Button2').style = "font-size: 22px;";

    flag = 1;

    document.querySelector('#cell-5').innerHTML = ''
    for (let h = 0; h < arr[0].length; h++) {
        let li = document.createElement('li')
        li.textContent = `${arr[0][h]} : ${arr[1][h]}`
        document.querySelector('#cell-5').append(li)
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function CreateWorkspace() {
    //flag1 = 2
    let Workspace = document.createElement('div')
    Workspace.id = "animation-area"
    document.querySelector(".modal-content").append(Workspace);

    let Button = document.createElement('input');
    Button.type = "button";
    Button.id = "Button"
    Button.value = "►";
    document.querySelector("#controls").append(Button);

    Button.onclick = Check;

    let Square = document.createElement('div');
    Square.id = "square";
    Square.style.width = '10px';
    Square.style.height = '10px';
    Square.style.backgroundColor = 'green';
    Square.style.float = 'right';
    Square.style.position = 'relative';
    document.querySelector("#animation-area").append(Square);

    let message = document.createElement('p');
    message.id = "message";
    message.textContent = 'Opened animation';
    document.querySelector("#controls").append(message);
}

function Start(sq) {
    
    document.querySelector('#Button').value = "∎";
    document.querySelector('#Button').style = "font-size: 28px; margin-bottom: 3px;";
    document.querySelector('#Button2').value = "∎";
    document.querySelector('#Button2').style = "font-size: 28px; margin-bottom: 3px;";

    document.querySelector("#message").textContent = 'Launched animation';
    document.querySelector("#message2").textContent = 'Launched animation';
    Message('Launched animation');

    flag = 2;
    let f = false;

    timer = setInterval(function () {
        let top
        let right

        if (flag1 == 1) {
            top = (Number(sq.style.top.split("p")[0]));
            right = (Number(sq.style.right.split("p")[0]));

            if ((top + Math.pow(-1, k) * rand1 <= 376 && top >= 0) || f) {
                f = false;
                sq.style.top = top + Math.pow(-1, k)*rand1 + 'px'
                sq.style.right = right + rand2 + 'px'
            }
            else {
                if (k % 2 == 0) {
                    document.querySelector("#message").textContent = 'Touched bottom side';
                    Message('Touched bottom side');
                }
                if (k % 2 == 1 ) {
                    document.querySelector("#message").textContent = 'Touched top side';
                    Message('Touched top side');
                }

                f = true;
                k++;
                shift1 = sq.style.top;
                shift2 = sq.style.right;
            }
            if (Number(sq.style.right.split('p')[0]) > 804)
            {
                k = 0
                sq.style.visibility = 'hidden';
                clearInterval(timer);
                flag = 3;
                document.querySelector('#Button').style = "font-size: 22px; margin-top: 2px;";
                document.querySelector('#Button').value = "↻";
                rand1 = random(1, 2);
                rand2 = random(1, 2);
                document.querySelector("#message").textContent = 'Left the animation area';

                Message('Left the animation area');
            }
        }

        if (flag1 == 2) {

            top = sq.y 
            right = -sq.x
            
            if ((top + Math.pow(-1, k) * rand3 <= (180-5) && top >= 0) || f) {
                f = false;
                sq.y = top + Math.pow(-1, k) * rand3
                sq.x = -(right + rand4)
            }
            else {
                if (k % 2 == 0) {
                    document.querySelector("#message2").textContent = 'Touched bottom side';
                    Message('Touched bottom side');
                }
                if (k % 2 == 1 ) {
                    console.log(k)
                    document.querySelector("#message2").textContent = 'Touched top side';
                    Message('Touched top side');
                }
                f = true;
                k++;
                shift1 = sq.y;
                shift2 = -sq.x;
            }
            if ((sq.x + 5) <= 0) {
                k = 0
                clearInterval(timer);
                flag = 3;
                document.querySelector('#Button2').style = "font-size: 22px; margin-top: 2px;";
                document.querySelector('#Button2').value = "↻";
                rand3 = random(3, 5);
                rand4 = random(1, 2);
                document.querySelector("#message2").textContent = 'Left the animation area';

                Message('Left the animation area');
            }
            ctx.beginPath()
            ctx.clearRect(0, 0, 345, 180);
            squar.draw()
        }
        if (flag == 1) {
            clearInterval(timer);
        }
    }, 10);
}
function Stop() {
    document.querySelector('#Button').value = "►";
    document.querySelector('#Button').style = "font-size: 22px; ";
    document.querySelector('#Button2').value = "►";
    document.querySelector('#Button2').style = "font-size: 22px; ";
    flag = 1;
    if (flag1 == 1)
        document.querySelector("#message").textContent = 'Stopped animation';
    if (flag1 == 2)
        document.querySelector("#message2").textContent = 'Stopped animation';
    Message('Stopped animation');
}
function Reload(sq) {
    document.querySelector('#Button').value = "►";
    document.querySelector('#Button2').value = "►";
    document.querySelector('#Button').style = "font-size: 22px; ";
    document.querySelector('#Button2').style = "font-size: 22px; ";

    flag = 1;
    Message('Reloaded animation');
    if (flag1 == 1) {
        sq.style.top = '0px';
        sq.style.right = '0px';
        sq.style.visibility = 'visible';
        document.querySelector("#message").textContent = 'Reloaded animation';
    }
    if (flag1 == 2) {
        squar.y = 0;
        squar.x = 340;
        ctx.beginPath()
        ctx.clearRect(0, 0, 345, 180);
        squar.draw()
        
        document.querySelector("#message2").textContent = 'Reloaded animation';
    }
}

function Check() {
    if (flag == 1) {
        if (flag1 == 1) Start(document.querySelector('#square'))
        else if (flag1 == 2) Start(squar)
    }
    else if (flag == 2) {
        if (flag1 == 1) Stop()
        else if (flag1 == 2) Stop()
    }
    else if (flag == 3) {
        if (flag1 == 1) Reload(document.querySelector('#square'))
        else if (flag1 == 2) Reload(squar)
    }
}
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CANVAS//
function CreateWorkspace2() {
    //flag1 = 1
    let Button = document.createElement('input');
    Button.type = "button";
    Button.id = "Button2"
    Button.value = "►";
    document.querySelector("#controls2").append(Button);

    Button.onclick = Check;

    let message = document.createElement('p');
    message.id = "message2";
    message.textContent = 'Opened animation';
    document.querySelector("#controls2").append(message);

    ctx = document.querySelector('#animation-area2').getContext('2d')
    squar = new SquareCanv(340, 0, rand1, rand2, 'green', 5, 5)
    squar.draw()

}
