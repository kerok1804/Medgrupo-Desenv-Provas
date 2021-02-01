document.addEventListener("DOMContentLoaded", function(){
   
    const p_ = document.getElementById("progresso");
    var b_ = '';
    for(let x=0; x < 360; x++){
       b_ += '<span style="transform: rotate('+x+'deg);"></span>';
    }
    p_.innerHTML += b_;
    
    var prog = document.querySelector("#progresso div");
    var maximo = +prog.textContent.trim().split("/")[1];
    var atual = 1;
    var bar_step = Math.floor(360/maximo);
    var bars = document.querySelectorAll("#progresso span");
 
    function passos(atual){
       var limit = atual == maximo ? bars.length : atual*bar_step;
       
       prog.innerHTML = atual + "/" + maximo;
       for(let b = 0; b < limit; b++){
          bars[b].style.display = "inline-block";
       }
    }
    passos(atual);
    
    document.getElementById("next").onclick = function(){
       if(atual < maximo){
          atual++;
          passos(atual);
       }
    }
    
 });