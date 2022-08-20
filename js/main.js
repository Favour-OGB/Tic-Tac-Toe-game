//X => <i class='fas fa-times'></i>
// O => <i class="fas fa-circle-dot"></i>

//Selecting All of Starting Page Tags
let startingPage = document.querySelector('#startingPage');
let choose = document.querySelectorAll('.choose');

//Selecting The tags for MainPage
let mainPage = document.querySelector('#mainPage');
let showChange = document.querySelector('#showChange');
let boxes = document.querySelectorAll('.boxes');

//Selecting All winner Page Tags 
let winnerPage = document.querySelector('#winner');
let winnerName = document.querySelector('#winnerName');
let restart = document.querySelector('#quit');

//How we can change turns
//False => X's Turn
// True => O's Turn
let changeTurn = null;

//Select the character you want
// i.e X or O.
choose.forEach( MakeChoice => {
    MakeChoice.addEventListener('click', ()=>{
        if(MakeChoice.id === 'playerX'){
            changeTurn = false;
            //console.log(changeTurn);
            showChange.style.left = `0px`;
        }else{
            changeTurn = true;
            //console.log(changeTurn);
            showChange.style.left = `0px`;
        }
        startingPage.style.display = "none";
        mainPage.style.display = "block";
    })
});

boxes.forEach(items =>{
    items.addEventListener('click', ()=> {
        //Add X icon if changeTurn = false
        //Add O icon if changeTurn = true
        if(changeTurn == false){
            items.innerHTML = `<i class='fas fa-times'></i>`;
            items.id = 'X';
            items.style.pointerEvents = 'none';
            showChange.style.left = `-160px`;
            items.style.color = '#e72dc5'; //to specify color of chosen character

            /*change the 'changeTurn' value from false to true*/
            changeTurn = true;
        }else{
            items.innerHTML = `<i class='fas fa-circle-dot'></i>`;
            items.id = 'O';
            items.style.pointerEvents = 'none';
            showChange.style.left = `0px`;
            items.style.color = 'greenyellow'; //specify color of other character

            /*change the 'changeTurn' value from true to false */
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    })
})
//ALL POSSIBLE WINNING COMBINATIONS
let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]

let winningFunc = ()=> {
    for (let i = 0; i <= 7; i++){
        let j = winningCombos[i];
        //console.log(j);
        
        if(boxes[j[0]].id == '' || boxes[j[1]].id == '' || boxes[j[2]].id == ''){
            continue;
        }else if(boxes[j[0]].id == 'X' && boxes[j[1]].id == 'X' && boxes[j[2]].id == 'X'){
            //console.log('X is the Winner');

            //add Winner Text
            winnerName.innerText = `PLAYER X WINS!`;

            //show winner Page and Hide Main Page
            mainPage.style.display = 'none';
            winnerPage.style.display = 'block';
        }else if(boxes[j[0]].id == 'O' && boxes[j[1]].id == 'O' && boxes[j[2]].id == 'O'){
            //console.log('O is the Winner');

            //add Winner Text
            winnerName.innerText = `PLAYER O WINS!`;

            //show winner Page and Hide Main Page
            mainPage.style.display = 'none';
            winnerPage.style.display = 'block';
        }
        else{
            continue;
        }
    }
}


//FUNCTION FOR WHEN IT'S A DRAW
let drawFunc = ()=>{
    if(boxes[0].id != '' && boxes[1].id != '' && 
    boxes[2].id != '' && boxes[3].id != '' && 
    boxes[4].id != '' && boxes[5].id != '' && 
    boxes[6].id != '' && boxes[7].id != '' && boxes[8].id != ''){
        //add Draw Text
        winnerName.innerText = `IT'S A TIE!`;

        //show winner Page and Hide Main Page
        mainPage.style.display = 'none';
        winnerPage.style.display = 'block';
    }
}

restart.addEventListener('click', ()=>{
    window.location.reload();
})
