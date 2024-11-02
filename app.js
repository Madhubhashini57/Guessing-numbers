let randomnumber=Math.floor((Math.random()*10)+1);
console.log(randomnumber);

let chancess=3;

function guess(){
    


    let userinput=document.getElementById("userinputt").value;
    console.log(userinput);

    let numbersleft=document.getElementById("leftnumers");
    let winorlost=document.getElementById("winorlost");

    let coolorhot=document.getElementById("coolorhot");
     

    if(chancess>0){

        if(randomnumber==userinput){

            numbersleft.innerHTML=("Changes Left : 0");
            winorlost.innerHTML=("Win the Game");
            coolorhot.innerHTML=(" Congratulations Gessing Number Is Correct !");
            

        }else{
            chancess--;
            numbersleft.innerHTML=(`Changes Left : ${chancess} `);
            if(randomnumber>userinput){
                coolorhot.innerHTML=("Youer Numeber is  Low.......");
            }else{
                coolorhot.innerHTML=("Youer Numeber is  Higher.......");
            }
            winorlost.innerHTML=("Try Agin");
        }
    }
    if(chancess === 0 && randomnumber!= userinput){
        numbersleft.innerHTML=("Changes Left : 0");
        coolorhot.innerHTML=("Bad Luck !!!!");
        winorlost.innerHTML=(" Sorry you Lost the Game ! Correct Number is = ${randomnumber}");
    }

    

}
