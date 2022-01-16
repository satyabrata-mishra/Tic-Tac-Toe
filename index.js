var player="X";
var winx="",wino="";
var moves=0;
var findwinner=false;
function box1(){
    document.getElementById("box1").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"1";
    }
    else{
        player="X";
        wino=wino+"1";
    }
    ++moves;
    winnerdecider();
}
function box2(){
    document.getElementById("box2").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"2";
    }
    else{
        player="X";
        wino=wino+"2";
    }
    ++moves;
    winnerdecider();
}
function box3(){
    document.getElementById("box3").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"3";
    }
    else{
        player="X";
        wino=wino+"3";
    }
    ++moves;
    winnerdecider();
}
function box4(){
    document.getElementById("box4").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"4";
    }
    else{
        player="X";
        wino=wino+"4";
    }
    ++moves;
    winnerdecider();
}
function box5(){
    document.getElementById("box5").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"5";
    }
    else{
        player="X";
        wino=wino+"5";
    }
    ++moves;
    winnerdecider();
}
function box6(){
    document.getElementById("box6").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"6";
    }
    else{
        player="X";
        wino=wino+"6";
    }
    ++moves;
    winnerdecider();
}
function box7(){
    document.getElementById("box7").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"7";
    }
    else{
        player="X";
        wino=wino+"7";
    }
    ++moves;
    winnerdecider();
}
function box8(){
    document.getElementById("box8").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"8";
    }
    else{
        player="X";
        wino=wino+"8";
    }
    ++moves;
    winnerdecider();
}
function box9(){
    document.getElementById("box9").innerHTML=player;
    if (player=="X"){
        player="0";
        winx=winx+"9";
    }
    else{
        player="X";
        wino=wino+"9";
    }
    ++moves;
    winnerdecider();
}
function winnerdecider(){
    if(moves===9 && !findwinner){
        document.getElementById("result").style.display="flex";
        document.getElementById("result").innerHTML="Draw!!!";
    }
    if(winx.includes("1") && winx.includes("2") && winx.includes("3") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box1").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box2").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box3").style.backgroundColor="rgb(185, 184, 184)";
        findwinner=true;
    }
    else if(winx.includes("4") && winx.includes("5") && winx.includes("6") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box4").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box6").style.backgroundColor="rgb(185, 184, 184)";
        findwinner=true;
    }
    else if(winx.includes("7") && winx.includes("8") && winx.includes("9") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box7").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box8").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box9").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(winx.includes("1") && winx.includes("4") && winx.includes("7") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box1").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box4").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box7").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(winx.includes("2") && winx.includes("5") && winx.includes("8") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box2").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box8").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(winx.includes("3") && winx.includes("6") && winx.includes("9") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box3").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box6").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box9").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(winx.includes("1") && winx.includes("5") && winx.includes("9") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box1").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box9").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(winx.includes("3") && winx.includes("5") && winx.includes("7") && !findwinner){
        document.getElementById("result").innerHTML="Player X Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box3").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box7").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("1") && wino.includes("2") && wino.includes("3") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box1").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box2").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box3").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("4") && wino.includes("5") && wino.includes("6") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box4").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box6").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("7") && wino.includes("8") && wino.includes("9") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box7").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box8").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box9").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("1") && wino.includes("4") && wino.includes("7") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box1").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box4").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box7").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("2") && wino.includes("5") && wino.includes("8") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box2").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box8").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("3") && wino.includes("6") && wino.includes("9") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box3").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box6").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box9").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("1") && wino.includes("5") && wino.includes("9") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box1").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box9").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
    else if(wino.includes("3") && wino.includes("5") && wino.includes("7") && !findwinner){
        document.getElementById("result").innerHTML="Player 0 Won!!!";
        document.getElementById("result").style.display="flex";
        document.getElementById("box3").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box5").style.backgroundColor="rgb(185, 184, 184)";
        document.getElementById("box7").style.backgroundColor="rgb(185, 184, 184)";
       findwinner=true;
    }
}