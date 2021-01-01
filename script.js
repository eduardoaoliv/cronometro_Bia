
window.addEventListener("load",main);
//Variáveis
var btn_reset;
var botoes_start;
var botoes_stop;
var visor_inicio;
var visor_fim;
var visor_parcial;
var visor_total;

var i;
var hh=0;
var mm=0;
var ss=0;

var hora_inicio=0;
var hora_fim=0;
var hora_start=0;
var hora_stop=0;
var hora_parcial=0;
var parcial=0;
var total=0;

setInterval( function(){
    var dt=new Date();    
    hh=dt.getHours();
    mm=dt.getMinutes();
    ss=dt.getSeconds();
    hora_inicio=new Date().getTime();
    hora_fim=new Date().getTime();
    //formata hora,minuto e segundo com dois digitos
    if(hh<10){
        hh="0"+hh;
    } 
    if(mm<10){
        mm="0"+mm;
    }   
    if(ss<10){
        ss="0"+ss;
    }
},500);

//Fim variáveis

var qdade=0;
var enviar;
var zerar;
var conteiner;
var i;
var btn;
var div_main;

function main(){            
    enviar=document.getElementById("enviar");
    enviar.addEventListener("click",criar);
    zerar=document.getElementById("reset");
    zerar.addEventListener("click",resetar);
    conteiner=document.getElementById("conteiner");
    col_id=document.getElementById("coluna_id");
    col_start=document.getElementById("coluna_start");
    col_stop=document.getElementById("coluna_stop");    
    col_inicio=document.getElementById("coluna_inicio");
    col_fim=document.getElementById("coluna_fim");
    col_parcial=document.getElementById("coluna_parcial");
    btn_reset=document.getElementById("btn_reset").addEventListener("click",reset);
}


//////////////////Cria os botões///////////////////////////////
function criar(){
    qdade=document.getElementById("qdade");
    
    for(i=0;i<qdade.value;i++){     
        btn=document.createElement("button");               
        btn.setAttribute("class","btn_id");
        btn.innerHTML=i;        
        col_id.appendChild(btn);                
        }
    
    for(i=0;i<qdade.value;i++){     
        btn=document.createElement("button");               
        btn.setAttribute("class","btn_start");
        btn.setAttribute("name",i);
        btn.innerHTML="start";      
        col_start.appendChild(btn);             
        }

    for(i=0;i<qdade.value;i++){
        btn=document.createElement("button");           
        btn.setAttribute("class","btn_stop");
        btn.setAttribute("name",i);
        btn.innerHTML="stop";           
        col_stop.appendChild(btn);      
        }
    for(i=0;i<qdade.value;i++){     
        btn=document.createElement("button");               
        btn.setAttribute("class","visor_inicio");
        btn.innerHTML="---";        
        col_inicio.appendChild(btn);                
        }
    
    for(i=0;i<qdade.value;i++){     
        btn=document.createElement("button");               
        btn.setAttribute("class","visor_fim");
        btn.innerHTML="---";        
        col_fim.appendChild(btn);               
        }

    for(i=0;i<qdade.value;i++){
        btn=document.createElement("button");           
        btn.setAttribute("class","visor_parcial");
        btn.innerHTML="---";            
        col_parcial.appendChild(btn);       
        }
            
    qdade.value=0;
    start();
    stop();
}       




    function start(){
        
////////////////////////////////// START ///////////////////////////////////////
    botoes_start=document.getElementsByClassName("btn_start");
    for(i=0;i<botoes_start.length;i++){
        botoes_start[i].addEventListener("click",function(){    
            this.style.backgroundColor="green"; 
            this.style.color="white";
            hora_start=hora_inicio;
            //escreve a hora capturada no display inicio     
            visor_inicio=document.getElementsByClassName("visor_inicio");
            visor_inicio[this.name].innerHTML=(hh+":"+mm+":"+ss);  
        });     
        }
}

    function stop(){
        ////////////////////////////////// STOP ///////////////////////////////////////
    botoes_stop=document.getElementsByClassName("btn_stop");
    for(i=0;i<botoes_stop.length;i++){
        botoes_stop[i].addEventListener("click",function(){
            this.style.backgroundColor="red"; 
            this.style.color="white";
            //escreve a hora capturada no display fim
            visor_fim=document.getElementsByClassName("visor_fim");
            visor_fim[this.name].innerHTML=(hh+":"+mm+":"+ss);
            //escreve o tempo gasto parcial no display parcial
            tempoparcial();         
            visor_parcial=document.getElementsByClassName("visor_parcial");
            visor_parcial[this.name].innerHTML=(parcial); 
            tempofinal(parcial); 
        });     
    }
}


///////////////////Apagar todos os botões para nova seleção da quantidade//////////////////////
function resetar(){     
    window.location.reload();   
}
        
///////////////////  Calcula o tempo total das ID's ////////////////////////         
function tempofinal(x){
    total=(total+x);
    visor_total=document.getElementById("visor_total");
    visor_total.innerHTML=(total.toFixed(2));    
}

//////////////////  Calcula o tempo parcial dos ID's  /////////////////////
function tempoparcial(){
    hora_stop=hora_fim;
    hora_parcial=hora_stop-hora_start;
    parcial=(hora_parcial/1000);
}


//////////////////  RESET  /////////////////////
function reset(){
    var sstart=document.getElementsByClassName("btn_start");    
    for(i=0;i<sstart.length;i++){
        sstart[i].style.backgroundColor="white";
        sstart[i].style.color="black";
        sstart[i].innerHTML="Start";        
    }

    var sstop=document.getElementsByClassName("btn_stop");    
    for(i=0;i<sstop.length;i++){
        sstop[i].style.backgroundColor="white";
        sstop[i].style.color="black";
        sstop[i].innerHTML="Stop";        
    }  

    var vinicio=document.getElementsByClassName("visor_inicio");
    for(i=0;i<vinicio.length;i++){
        vinicio[i].innerHTML="---";
    } 

    var vfim=document.getElementsByClassName("visor_fim");
    for(i=0;i<vfim.length;i++){
        vfim[i].innerHTML="---";
    }  
        
    var pparcial=document.getElementsByClassName("visor_parcial");
    for(i=0;i<pparcial.length;i++){
        pparcial[i].innerHTML="---";
    }
    
    document.getElementById("visor_total").innerHTML="---";
    total=0;    
       
}   