let tiles= document.querySelectorAll(".tile");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("p");
let counter =0;


let turnX= true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
    if(turnX){
        tile.innerText="X";
        turnX = false;
    }else{
        tile.innerText="O";
        turnX= true;
    }
    tile.disabled =true;
    checkWinner();
    counter++;
    let isWinner= checkWinner();
    if(counter ===9 && !isWinner){
        showDraw();
    }
    });


});

const showDraw=()=>{
    msg.innerText = "Draw";
    msgContainer.classList.remove("hide");
}



const disabledTiles = () =>{
    for(let tile of tiles){
        tile.disabled = true;
    }
}

const resetGame = () =>{
    turnX= true;
    for(let tile of tiles){
        tile.disabled = false;
        tile.innerText=" ";
    }
    msgContainer.classList.add("hide");
}

const showWinner=(winner)=>{
    msg.innerText = `Congratulations ${winner} won`;
    msgContainer.classList.remove("hide");
}

const checkWinner= ()=>{
    for(let pattern of winPatterns ){
        let pos1 =tiles[pattern[0]].innerText;
        let pos2 = tiles[pattern[1]].innerText;
        let pos3 =tiles[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                disabledTiles();
                showWinner(pos1);
            }
        }
        
}
}
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);