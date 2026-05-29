let randomNumber=Math.floor(Math.random()*6)+1;
let randNumber=Math.floor(Math.random()*6)+1;
let image=document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber+".png");
let image1=document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randNumber+".png");
if(randNumber>randomNumber){
    document.querySelector("h1").innerHTML=`Player 1 win`
}
else if(randNumber===randomNumber){
    document.querySelector("h1").innerHTML=`Draw`
}
else{
    document.querySelector("h1").innerHTML=`Player 2 win`
}