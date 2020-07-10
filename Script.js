function calculatetip(){
var totalBill = document.getElementById('Bill').value;
var quality = document.getElementById('qlt').value;
var nbr = document.getElementById('ppl').value;
var tip = (totalBill*quality)/nbr;
var fin = tip.toFixed(2);
document.getElementById("display").innerHTML=fin;
if(totalBill==''){
   document.getElementById("error").style.display="block";
   document.getElementById("error").innerHTML="enter something";

}
}
