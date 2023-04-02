/* playerselection part start */
const PlayercartArray =[];

function display(playercart){
/*  const playerCartProducts = document.getElementById('player-cart-products'); */
const tableBody=document.getElementById('player-cart-products');

/* after calling the function we have to clear the value otherwise it will give us same/duplicate value in the cartArray */
tableBody.innerHTML ='';

 for(let i = 0; i < 5; i++){

    const name = playercart[i]. playerName;
//creating the table data to get the value in player cart in every call 
    const tr =document.createElement('tr');
    tr.innerHTML = `
              <td>${i+1}</td>
            <td>${name}</td>
    ` 
    tableBody.appendChild(tr);
 }
}
function addToCart(element){
 /* playername is to get access to the rute node where the elemenet will be added  */
const playerName = element.parentNode.parentNode.children[1].innerText;
const playerobj ={
    playerName: playerName,
}

/* Aleart to not give more than 5 player */
if (PlayercartArray.length>4){
    alert('warning: Your purchase Limit is exceed');
    return;
} 
else{
    PlayercartArray.push(playerobj);
}
display(PlayercartArray);
}
/* playerselection part end */

/* button disable part start */
document.getElementById('lose-btn').addEventListener('click',function(){
    document.getElementById("lose-btn").disabled = true;
});
document.getElementById('weight-btn').addEventListener('click',function(){
    document.getElementById("weight-btn").disabled = true;
});
document.getElementById('lose-weight-btn').addEventListener('click',function(){
    document.getElementById("lose-weight-btn").disabled = true;
});
document.getElementById('cardio-btn').addEventListener('click',function(){
    document.getElementById("cardio-btn").disabled = true;
});
document.getElementById('strength-btn').addEventListener('click',function(){
    document.getElementById("strength-btn").disabled = true;
});
document.getElementById('core-btn').addEventListener('click',function(){
    document.getElementById("core-btn").disabled = true;
});

/* button disable part start */ 