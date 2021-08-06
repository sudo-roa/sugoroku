var counts=0;

function dice(){
    var diceText = document.querySelector('#num-textarea');
    var number = Math.floor(Math.random()*100 % 6 + 1) ;
    diceText.value = number;
    count();
    move(number);
}

function count(){
    counts++;
    var setcount = document.querySelector('#count');
    setcount.value=counts;
    console.log(counts);
}

function move(diceNumber){
    var player = document.querySelector('.player');
    var before = document.getElementById(player.id);
    var masu = before.id.slice(4);
    var destination = Number(masu) + diceNumber;
    var after = document.getElementById("masu"+destination);
    before.setAttribute("class","square");
    before.removeAttribute("style","background-color:#000000;");
    walk(diceNumber, i = 0);
    after.setAttribute("class","square player");
    after.setAttribute("style","background-color:bisque;");

    if(destination>=49){
        finish(destination);
    }
    
}

function walk(diceNumber, i){
    
    if(i < diceNumber){
        setTimeout(function(){
            console.log(i);
            i++;
            walk(diceNumber,i);
        },100);
    }
    // 非同期処理でうまくいかない
    // for(var i=1;i<diceNumber;i++){
    //     var moving = document.getElementById("masu"+i);
    //     sleep(300);
    //     moving.setAttribute("class","square player");
    //     moving.setAttribute("style","background-color:bisque;");
    //     sleep(300);
    //     moving.setAttribute("class","square");
    //     moving.removeAttribute("style","background-color:#000000;");  
    // }
}

function finish(finishNumber){
    console.log(finishNumber);
}
