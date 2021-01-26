let mynum=125;
let urnum;
let numb = Math.floor((Math.random()*150)+1);

for(let i=0;i<mynum;mynum--){
    console.log(i);
    urnum=Number(prompt("First Open browser Console than write number "));
    if(mynum===urnum){
        console.log("your number is True");
    }else if(mynum>urnum){
        console.log("UP!!!");
    }else if(mynum<urnum){
        console.log("DOWN!!!");
    }else{
        console.log("you write wrong number");
    }

}

