const boxes = document.querySelectorAll(".boxes");
const resetBtn = document.querySelector('.reset');
const newgameBtn = document.querySelector('#newGame')
const msg = document.querySelector('#msg');
const winnerContainer = document.querySelector('.winner');
const block = document.querySelector('.block');

let playerX= true;
let count =0;

const pattern = [
                    [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        if(playerX){
            box.innerHTML="X";
            playerX=false;
        }
        else{
            box.innerHTML="0";
            playerX=true;
        }
        if(box.disabled==false){
            count++;
        }
        box.disabled= true;
        checkWinner();
    })
})

let checkWinner=()=>{
    if(count>=9){
        draw();
    }
    pattern.forEach((pat)=>{

        let pos1val = boxes[pat[0]].innerHTML;
        let pos2val = boxes[pat[1]].innerHTML;
        let pos3val = boxes[pat[2]].innerHTML;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                showWinner(pos1val);
            }
        }
    })
}

let showWinner=(winner)=>{
    console.log("winner->"+winner);
    disableBoxes();
    msg.innerHTML=`Congratulatins!  ${winner} won!`
    console.log(msg.innerHTML);

    console.log(winnerContainer.classList);
    winnerContainer.classList.remove('hide')

    
    block.classList.add("hide")
    console.log(block.classList)
    console.log(winnerContainer.classList);
    resetBtn.classList.add("hide")

}

let draw =()=>{
    msg.innerHTML=`Match Draw!! Start a new game`
    console.log(msg.innerHTML);

    console.log(winnerContainer.classList);
    winnerContainer.classList.remove('hide')
    console.log(winnerContainer.classList);

}

let disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}

let enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
    })
}



newgameBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
    })

    enableBoxes();
    count=0;
    
    winnerContainer.classList.add('hide')
    block.classList.remove("hide")
    resetBtn.classList.remove("hide")
})

resetBtn.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
    })

    enableBoxes();
    count=0;
    
    winnerContainer.classList.add('hide')
    block.classList.remove("hide")
})