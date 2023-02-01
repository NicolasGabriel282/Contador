const button_diminuir= document.querySelector("#diminuir");
button_diminuir.addEventListener("click",function(){
    let valor=parseInt(document.getElementById("contador").textContent,10)
    valor=valor-1
    document.getElementById("contador").innerHTML=valor
    cor(valor)}); 

const button_aumentar=document.querySelector("#aumentar");
button_aumentar.addEventListener("click",function(){
    let valor=parseInt(document.getElementById("contador").textContent,10)
    valor=valor+1;
    document.getElementById("contador").innerHTML=valor
    cor(valor)});

const button_resetar=document.querySelector("#resetar")
button_resetar.addEventListener("click",function(){
    let valor=parseInt( document.getElementById("contador").textContent,10)
    valor=0
    document.getElementById("contador").innerHTML=valor
    cor(valor)})

   function cor(valor){
   if (valor == 0)
    {
        document.getElementById('contador').style.color='black'
    }
    else if(valor > 0)
    {
        document.getElementById("contador").style.color='green'
    }
    else
    {
        document.getElementById("contador").style.color='red'
    }}

