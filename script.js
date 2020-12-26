
window.addEventListener("load",eventos);

var i=0;
var hh=0;
var mm=0;
var ss=0;

var hora_inicio=0;
var hora_fim=0;
var hora_start=0;
var hora_stop=0;
var hora_parcial=0;
var parcial=0;

setInterval( function(){
    var dt=new Date();    
    hh=dt.getHours();
    mm=dt.getMinutes();
    ss=dt.getSeconds();
    hora_inicio=new Date().getTime();
    hora_fim=new Date().getTime(); 
        if(hh<10){
            hh="0"+hh;
        }
        if(mm<10){
            mm="0"+mm;
        }
        if(ss<10){
            ss="0"+ss;
        }
},1000);

var total=0;//usado no cálculo do tempo final

function eventos(){     

    document.getElementById("btn_start01").addEventListener("click",start01);
    document.getElementById("btn_inicio01");
    document.getElementById("btn_stop01").addEventListener("click",stop01);
    document.getElementById("btn_fim01");

    document.getElementById("btn_start02").addEventListener("click",start02);
    document.getElementById("btn_inicio02");
    document.getElementById("btn_stop02").addEventListener("click",stop02);
    document.getElementById("btn_fim02");

    document.getElementById("btn_start03").addEventListener("click",start03);
    document.getElementById("btn_inicio03");
    document.getElementById("btn_stop03").addEventListener("click",stop03);
    document.getElementById("btn_fim03");

    document.getElementById("btn_start04").addEventListener("click",start04);
    document.getElementById("btn_inicio04");
    document.getElementById("btn_stop04").addEventListener("click",stop04);
    document.getElementById("btn_fim04");

    document.getElementById("btn_start05").addEventListener("click",start05);
    document.getElementById("btn_inicio05");
    document.getElementById("btn_stop05").addEventListener("click",stop05);
    document.getElementById("btn_fim05");

    document.getElementById("btn_start06").addEventListener("click",start06);
    document.getElementById("btn_inicio06");
    document.getElementById("btn_stop06").addEventListener("click",stop06);
    document.getElementById("btn_fim06");

    document.getElementById("btn_start07").addEventListener("click",start07);
    document.getElementById("btn_inicio07");
    document.getElementById("btn_stop07").addEventListener("click",stop07);
    document.getElementById("btn_fim07");

    document.getElementById("btn_start08").addEventListener("click",start08);
    document.getElementById("btn_inicio08");
    document.getElementById("btn_stop08").addEventListener("click",stop08);
    document.getElementById("btn_fim08");

    document.getElementById("btn_start09").addEventListener("click",start09);
    document.getElementById("btn_inicio09");
    document.getElementById("btn_stop09").addEventListener("click",stop09);
    document.getElementById("btn_fim09");

    document.getElementById("btn_start10").addEventListener("click",start10);
    document.getElementById("btn_inicio10");
    document.getElementById("btn_stop10").addEventListener("click",stop10);
    document.getElementById("btn_fim10");

    document.getElementById("btn_start11").addEventListener("click",start11);
    document.getElementById("btn_inicio11");
    document.getElementById("btn_stop11").addEventListener("click",stop11);
    document.getElementById("btn_fim11");

    document.getElementById("btn_start12").addEventListener("click",start12);
    document.getElementById("btn_inicio12");
    document.getElementById("btn_stop12").addEventListener("click",stop12);
    document.getElementById("btn_fim12");

    document.getElementById("btn_start13").addEventListener("click",start13);
    document.getElementById("btn_inicio13");
    document.getElementById("btn_stop13").addEventListener("click",stop13);
    document.getElementById("btn_fim13");

    document.getElementById("btn_start14").addEventListener("click",start14);
    document.getElementById("btn_inicio14");
    document.getElementById("btn_stop14").addEventListener("click",stop14);
    document.getElementById("btn_fim14");

    document.getElementById("btn_start15").addEventListener("click",start15);
    document.getElementById("btn_inicio15");
    document.getElementById("btn_stop15").addEventListener("click",stop15);
    document.getElementById("btn_fim15");

    document.getElementById("btn_start16").addEventListener("click",start16);
    document.getElementById("btn_inicio16");
    document.getElementById("btn_stop16").addEventListener("click",stop16);
    document.getElementById("btn_fim16");

    document.getElementById("btn_start17").addEventListener("click",start17);
    document.getElementById("btn_inicio17");
    document.getElementById("btn_stop17").addEventListener("click",stop17);
    document.getElementById("btn_fim17");

    document.getElementById("btn_start18").addEventListener("click",start18);
    document.getElementById("btn_inicio18");
    document.getElementById("btn_stop18").addEventListener("click",stop18);
    document.getElementById("btn_fim18");

    document.getElementById("btn_start19").addEventListener("click",start19);
    document.getElementById("btn_inicio19");
    document.getElementById("btn_stop19").addEventListener("click",stop19);
    document.getElementById("btn_fim19");

    document.getElementById("btn_start20").addEventListener("click",start20);
    document.getElementById("btn_inicio20");
    document.getElementById("btn_stop20").addEventListener("click",stop20);
    document.getElementById("btn_fim20");

    document.getElementById("btn_start21").addEventListener("click",start21);
    document.getElementById("btn_inicio21");
    document.getElementById("btn_stop21").addEventListener("click",stop21);
    document.getElementById("btn_fim21");

    document.getElementById("btn_start22").addEventListener("click",start22);
    document.getElementById("btn_inicio22");
    document.getElementById("btn_stop22").addEventListener("click",stop22);
    document.getElementById("btn_fim21");

    document.getElementById("btn_start23").addEventListener("click",start23);
    document.getElementById("btn_inicio23");
    document.getElementById("btn_stop23").addEventListener("click",stop23);
    document.getElementById("btn_fim23");

    document.getElementById("btn_start24").addEventListener("click",start24);
    document.getElementById("btn_inicio24");
    document.getElementById("btn_stop24").addEventListener("click",stop24);
    document.getElementById("btn_fim24");

    document.getElementById("btn_start25").addEventListener("click",start25);
    document.getElementById("btn_inicio25");
    document.getElementById("btn_stop25").addEventListener("click",stop25);
    document.getElementById("btn_fim25");

    document.getElementById("btn_start26").addEventListener("click",start26);
    document.getElementById("btn_inicio26");
    document.getElementById("btn_stop26").addEventListener("click",stop26);
    document.getElementById("btn_fim26");

    document.getElementById("btn_start27").addEventListener("click",start27);
    document.getElementById("btn_inicio27");
    document.getElementById("btn_stop27").addEventListener("click",stop27);
    document.getElementById("btn_fim27");

    document.getElementById("btn_start28").addEventListener("click",start28);
    document.getElementById("btn_inicio28");
    document.getElementById("btn_stop28").addEventListener("click",stop28);
    document.getElementById("btn_fim28");

    document.getElementById("btn_start29").addEventListener("click",start29);
    document.getElementById("btn_inicio29");
    document.getElementById("btn_stop29").addEventListener("click",stop29);
    document.getElementById("btn_fim29");

    document.getElementById("btn_start30").addEventListener("click",start30);
    document.getElementById("btn_inicio30");
    document.getElementById("btn_stop30").addEventListener("click",stop30);
    document.getElementById("btn_fim30");

    document.getElementById("btn_start31").addEventListener("click",start31);
    document.getElementById("btn_inicio31");
    document.getElementById("btn_stop31").addEventListener("click",stop31);
    document.getElementById("btn_fim31");

    document.getElementById("btn_start32").addEventListener("click",start32);
    document.getElementById("btn_inicio32");
    document.getElementById("btn_stop32").addEventListener("click",stop32);
    document.getElementById("btn_fim32");

    document.getElementById("btn_start33").addEventListener("click",start33);
    document.getElementById("btn_inicio33");
    document.getElementById("btn_stop33").addEventListener("click",stop33);
    document.getElementById("btn_fim33");

    document.getElementById("btn_start34").addEventListener("click",start34);
    document.getElementById("btn_inicio34");
    document.getElementById("btn_stop34").addEventListener("click",stop34);
    document.getElementById("btn_fim34");

    document.getElementById("btn_start35").addEventListener("click",start35);
    document.getElementById("btn_inicio35");
    document.getElementById("btn_stop35").addEventListener("click",stop35);
    document.getElementById("btn_fim35");

    document.getElementById("btn_start36").addEventListener("click",start36);
    document.getElementById("btn_inicio36");
    document.getElementById("btn_stop36").addEventListener("click",stop36);
    document.getElementById("btn_fim36");

    document.getElementById("btn_start37").addEventListener("click",start37);
    document.getElementById("btn_inicio37");
    document.getElementById("btn_stop37").addEventListener("click",stop37);
    document.getElementById("btn_fim37");

    document.getElementById("btn_start38").addEventListener("click",start38);
    document.getElementById("btn_inicio38");
    document.getElementById("btn_stop38").addEventListener("click",stop38);
    document.getElementById("btn_fim38");

    document.getElementById("btn_start39").addEventListener("click",start39);
    document.getElementById("btn_inicio39");
    document.getElementById("btn_stop39").addEventListener("click",stop39);
    document.getElementById("btn_fim39");

    document.getElementById("btn_start40").addEventListener("click",start40);
    document.getElementById("btn_inicio40");
    document.getElementById("btn_stop40").addEventListener("click",stop40);
    document.getElementById("btn_fim40");

    document.getElementById("btn_start41").addEventListener("click",start41);
    document.getElementById("btn_inicio41");
    document.getElementById("btn_stop41").addEventListener("click",stop41);
    document.getElementById("btn_fim41");

    document.getElementById("btn_start42").addEventListener("click",start42);
    document.getElementById("btn_inicio42");
    document.getElementById("btn_stop42").addEventListener("click",stop42);
    document.getElementById("btn_fim42");

    document.getElementById("btn_start43").addEventListener("click",start43);
    document.getElementById("btn_inicio43");
    document.getElementById("btn_stop43").addEventListener("click",stop43);
    document.getElementById("btn_fim43");

    document.getElementById("btn_start44").addEventListener("click",start44);
    document.getElementById("btn_inicio44");
    document.getElementById("btn_stop44").addEventListener("click",stop44);
    document.getElementById("btn_fim44");

    document.getElementById("btn_start45").addEventListener("click",start45);
    document.getElementById("btn_inicio45");
    document.getElementById("btn_stop45").addEventListener("click",stop45);
    document.getElementById("btn_fim45");

    document.getElementById("btn_start46").addEventListener("click",start46);
    document.getElementById("btn_inicio46");
    document.getElementById("btn_stop46").addEventListener("click",stop46);
    document.getElementById("btn_fim46");

    document.getElementById("btn_start47").addEventListener("click",start47);
    document.getElementById("btn_inicio47");
    document.getElementById("btn_stop47").addEventListener("click",stop47);
    document.getElementById("btn_fim47");

    document.getElementById("btn_start48").addEventListener("click",start48);
    document.getElementById("btn_inicio48");
    document.getElementById("btn_stop48").addEventListener("click",stop48);
    document.getElementById("btn_fim48");

    document.getElementById("btn_start49").addEventListener("click",start49);
    document.getElementById("btn_inicio49");
    document.getElementById("btn_stop49").addEventListener("click",stop49);
    document.getElementById("btn_fim49");

    document.getElementById("btn_start50").addEventListener("click",start50);
    document.getElementById("btn_inicio50");
    document.getElementById("btn_stop50").addEventListener("click",stop50);
    document.getElementById("btn_fim50");
   
    var bt_reset=document.getElementById("btn_reset").addEventListener("click",reset);         
}

//Calcula o tempo total das ID's
function tempofinal(x){
    total=(total+x);
    document.getElementById("btn_total").innerHTML=(total.toFixed(2));
    console.log(total.toFixed(2));
}

//Calcula o tempo parcial dos ID's
function tempoparcial(){
    hora_stop=hora_fim;
    hora_parcial=hora_stop-hora_start;
    parcial=(hora_parcial/1000);
}


//Função Start e Stop de cada ID
function start01(){
    document.getElementById("btn_inicio01").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start01").style.backgroundColor="green"; 
    document.getElementById("btn_start01").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop01(){    
    document.getElementById("btn_fim01").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop01").style.backgroundColor="red";
    document.getElementById("btn_stop01").style.color="white"; 
    tempoparcial();
    document.getElementById("btn_parcial01").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start02(){
    document.getElementById("btn_inicio02").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start02").style.backgroundColor="green"; 
    document.getElementById("btn_start02").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop02(){    
    document.getElementById("btn_fim02").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop02").style.backgroundColor="red";
    document.getElementById("btn_stop02").style.color="white"; 
    tempoparcial();
    document.getElementById("btn_parcial02").innerHTML=(parcial); 
    tempofinal(parcial);
}

function start03(){
    document.getElementById("btn_inicio03").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start03").style.backgroundColor="green"; 
    document.getElementById("btn_start03").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop03(){    
    document.getElementById("btn_fim03").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop03").style.backgroundColor="red"; 
    document.getElementById("btn_stop03").style.color="white";
    tempoparcial();
    document.getElementById("btn_parcial03").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start04(){
    document.getElementById("btn_inicio04").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start04").style.backgroundColor="green"; 
    document.getElementById("btn_start04").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop04(){    
    document.getElementById("btn_fim04").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop04").style.backgroundColor="red"; 
    document.getElementById("btn_stop04").style.color="white";
    tempoparcial();
    document.getElementById("btn_parcial04").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start05(){
    document.getElementById("btn_inicio05").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start05").style.backgroundColor="green"; 
    document.getElementById("btn_start05").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop05(){    
    document.getElementById("btn_fim05").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop05").style.backgroundColor="red"; 
    document.getElementById("btn_stop05").style.color="white";
    tempoparcial();
    document.getElementById("btn_parcial05").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start06(){
    document.getElementById("btn_inicio06").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start06").style.backgroundColor="green";  
    document.getElementById("btn_start06").style.color="white";
    hora_start=hora_inicio;  
}
function stop06(){    
    document.getElementById("btn_fim06").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop06").style.backgroundColor="red";
    document.getElementById("btn_stop06").style.color="white"; 
    tempoparcial();
    document.getElementById("btn_parcial06").innerHTML=(parcial); 
    tempofinal(parcial);    
}

function start07(){
    document.getElementById("btn_inicio07").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start07").style.backgroundColor="green"; 
    document.getElementById("btn_start07").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop07(){    
    document.getElementById("btn_fim07").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop07").style.backgroundColor="red"; 
    document.getElementById("btn_stop07").style.color="white";
    tempoparcial();
    document.getElementById("btn_parcial07").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start08(){
    document.getElementById("btn_inicio08").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start08").style.backgroundColor="green";  
    document.getElementById("btn_start08").style.color="white";
    hora_start=hora_inicio;  
}
function stop08(){    
    document.getElementById("btn_fim08").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop08").style.backgroundColor="red";
    document.getElementById("btn_stop08").style.color="white"; 
    tempoparcial();
    document.getElementById("btn_parcial08").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start09(){
    document.getElementById("btn_inicio09").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start09").style.backgroundColor="green"; 
    document.getElementById("btn_start09").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop09(){    
    document.getElementById("btn_fim09").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop09").style.backgroundColor="red"; 
    document.getElementById("btn_stop09").style.color="white";
    tempoparcial();
    document.getElementById("btn_parcial09").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start10(){
    document.getElementById("btn_inicio10").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start10").style.backgroundColor="green";
    document.getElementById("btn_start10").style.color="white";  
    hora_start=hora_inicio;  
}
function stop10(){    
    document.getElementById("btn_fim10").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop10").style.backgroundColor="red"; 
    document.getElementById("btn_stop10").style.color="white";
    tempoparcial();
    document.getElementById("btn_parcial10").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start11(){
    document.getElementById("btn_inicio11").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start11").style.backgroundColor="green"; 
    document.getElementById("btn_start11").style.color="white"; 
    hora_start=hora_inicio;  
}
function stop11(){    
    document.getElementById("btn_fim11").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop11").style.backgroundColor="red"; 
    document.getElementById("btn_stop11").style.color="white";
    tempoparcial();
    document.getElementById("btn_parcial11").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start12(){
    document.getElementById("btn_inicio12").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start12").style.backgroundColor="green";
    document.getElementById("btn_start12").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop12(){    
    document.getElementById("btn_fim12").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop12").style.backgroundColor="red"; 
    document.getElementById("btn_stop12").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial12").innerHTML=(parcial); 
    tempofinal(parcial);
}

function start13(){
    document.getElementById("btn_inicio13").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start13").style.backgroundColor="green"; 
    document.getElementById("btn_start13").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop13(){    
    document.getElementById("btn_fim13").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop13").style.backgroundColor="red";
    document.getElementById("btn_stop13").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial13").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start14(){
    document.getElementById("btn_inicio14").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start14").style.backgroundColor="green"; 
    document.getElementById("btn_start14").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop14(){    
    document.getElementById("btn_fim14").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop14").style.backgroundColor="red";
    document.getElementById("btn_stop14").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial14").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start15(){
    document.getElementById("btn_inicio15").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start15").style.backgroundColor="green"; 
    document.getElementById("btn_start15").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop15(){    
    document.getElementById("btn_fim15").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop15").style.backgroundColor="red"; 
    document.getElementById("btn_stop15").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial15").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start16(){
    document.getElementById("btn_inicio16").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start16").style.backgroundColor="green";
    document.getElementById("btn_start16").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop16(){    
    document.getElementById("btn_fim16").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop16").style.backgroundColor="red";
    document.getElementById("btn_stop16").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial16").innerHTML=(parcial); 
    tempofinal(parcial);    
}

function start17(){
    document.getElementById("btn_inicio17").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start17").style.backgroundColor="green";  
    document.getElementById("btn_start17").style.backgroundColor="green"; 
    hora_start=hora_inicio;  
}
function stop17(){    
    document.getElementById("btn_fim17").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop17").style.backgroundColor="red"; 
    document.getElementById("btn_stop17").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial17").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start18(){
    document.getElementById("btn_inicio18").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start18").style.backgroundColor="green";
    document.getElementById("btn_start18").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop18(){    
    document.getElementById("btn_fim18").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop18").style.backgroundColor="red";
    document.getElementById("btn_stop18").style.backgroundColor="green";
    tempoparcial();
    document.getElementById("btn_parcial18").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start19(){
    document.getElementById("btn_inicio19").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start19").style.backgroundColor="green"; 
    document.getElementById("btn_start19").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop19(){    
    document.getElementById("btn_fim19").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop19").style.backgroundColor="red";
    document.getElementById("btn_stop19").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial19").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start20(){
    document.getElementById("btn_inicio20").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start20").style.backgroundColor="green"; 
    document.getElementById("btn_start20").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop20(){    
    document.getElementById("btn_fim20").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop20").style.backgroundColor="red"; 
    document.getElementById("btn_stop20").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial20").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start21(){
    document.getElementById("btn_inicio21").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start21").style.backgroundColor="green"; 
    document.getElementById("btn_start21").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop21(){    
    document.getElementById("btn_fim21").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop21").style.backgroundColor="red";
    document.getElementById("btn_stop21").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial21").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start22(){
    document.getElementById("btn_inicio22").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start22").style.backgroundColor="green";
    document.getElementById("btn_start22").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop22(){    
    document.getElementById("btn_fim22").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop22").style.backgroundColor="red";
    document.getElementById("btn_stop22").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial22").innerHTML=(parcial); 
    tempofinal(parcial);
}

function start23(){
    document.getElementById("btn_inicio23").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start23").style.backgroundColor="green"; 
    document.getElementById("btn_start23").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop23(){    
    document.getElementById("btn_fim23").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop23").style.backgroundColor="red";
    document.getElementById("btn_stop23").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial23").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start24(){
    document.getElementById("btn_inicio24").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start24").style.backgroundColor="green"; 
    document.getElementById("btn_start24").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop24(){    
    document.getElementById("btn_fim24").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop24").style.backgroundColor="red";
    document.getElementById("btn_stop24").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial24").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start25(){
    document.getElementById("btn_inicio25").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start25").style.backgroundColor="green";
    document.getElementById("btn_start25").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop25(){    
    document.getElementById("btn_fim25").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop25").style.backgroundColor="red"; 
    document.getElementById("btn_stop25").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial25").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start26(){
    document.getElementById("btn_inicio26").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start26").style.backgroundColor="green"; 
    document.getElementById("btn_start26").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop26(){    
    document.getElementById("btn_fim26").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop26").style.backgroundColor="red";
    document.getElementById("btn_stop26").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial26").innerHTML=(parcial); 
    tempofinal(parcial);    
}

function start27(){
    document.getElementById("btn_inicio27").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start27").style.backgroundColor="green";
    document.getElementById("btn_start27").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop27(){    
    document.getElementById("btn_fim27").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop27").style.backgroundColor="red";
    document.getElementById("btn_stop27").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial27").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start28(){
    document.getElementById("btn_inicio28").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start28").style.backgroundColor="green"; 
    document.getElementById("btn_start28").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop28(){    
    document.getElementById("btn_fim28").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop28").style.backgroundColor="red";
    document.getElementById("btn_stop28").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial28").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start29(){
    document.getElementById("btn_inicio29").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start29").style.backgroundColor="green"; 
    document.getElementById("btn_start29").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop29(){    
    document.getElementById("btn_fim29").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop29").style.backgroundColor="red"; 
    document.getElementById("btn_stop29").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial29").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start30(){
    document.getElementById("btn_inicio30").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start30").style.backgroundColor="green"; 
    document.getElementById("btn_start30").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop30(){    
    document.getElementById("btn_fim30").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop30").style.backgroundColor="red"; 
    document.getElementById("btn_stop30").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial30").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start31(){
    document.getElementById("btn_inicio31").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start31").style.backgroundColor="green"; 
    document.getElementById("btn_start31").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop31(){    
    document.getElementById("btn_fim31").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop31").style.backgroundColor="red"; 
    document.getElementById("btn_stop31").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial31").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start32(){
    document.getElementById("btn_inicio32").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start32").style.backgroundColor="green"; 
    document.getElementById("btn_start32").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop32(){    
    document.getElementById("btn_fim32").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop32").style.backgroundColor="red";
    document.getElementById("btn_stop32").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial32").innerHTML=(parcial); 
    tempofinal(parcial);
}

function start33(){
    document.getElementById("btn_inicio33").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start33").style.backgroundColor="green"; 
    document.getElementById("btn_start33").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop33(){    
    document.getElementById("btn_fim33").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop33").style.backgroundColor="red"; 
    document.getElementById("btn_stop33").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial33").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start34(){
    document.getElementById("btn_inicio34").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start34").style.backgroundColor="green"; 
    document.getElementById("btn_start34").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop34(){    
    document.getElementById("btn_fim34").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop34").style.backgroundColor="red"; 
    document.getElementById("btn_stop34").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial34").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start35(){
    document.getElementById("btn_inicio35").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start35").style.backgroundColor="green"; 
    document.getElementById("btn_start35").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop35(){    
    document.getElementById("btn_fim35").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop35").style.backgroundColor="red";
    document.getElementById("btn_stop35").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial35").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start36(){
    document.getElementById("btn_inicio36").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start36").style.backgroundColor="green"; 
    document.getElementById("btn_start36").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop36(){    
    document.getElementById("btn_fim36").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop36").style.backgroundColor="red";
    document.getElementById("btn_stop36").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial36").innerHTML=(parcial); 
    tempofinal(parcial);    
}

function start37(){
    document.getElementById("btn_inicio37").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start37").style.backgroundColor="green"; 
    document.getElementById("btn_start37").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop37(){    
    document.getElementById("btn_fim37").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop37").style.backgroundColor="red";
    document.getElementById("btn_stop37").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial37").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start38(){
    document.getElementById("btn_inicio38").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start38").style.backgroundColor="green"; 
    document.getElementById("btn_start38").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop38(){    
    document.getElementById("btn_fim38").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop38").style.backgroundColor="red";
    document.getElementById("btn_stop38").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial38").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start39(){
    document.getElementById("btn_inicio39").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start39").style.backgroundColor="green"; 
    document.getElementById("btn_start39").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop39(){    
    document.getElementById("btn_fim39").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop39").style.backgroundColor="red";
    document.getElementById("btn_stop39").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial39").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start40(){
    document.getElementById("btn_inicio40").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start40").style.backgroundColor="green"; 
    document.getElementById("btn_start40").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop40(){    
    document.getElementById("btn_fim40").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop40").style.backgroundColor="red"; 
    document.getElementById("btn_stop40").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial40").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start41(){
    document.getElementById("btn_inicio41").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start41").style.backgroundColor="green"; 
    document.getElementById("btn_start41").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop41(){    
    document.getElementById("btn_fim41").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop41").style.backgroundColor="red";
    document.getElementById("btn_stop41").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial41").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start42(){
    document.getElementById("btn_inicio42").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start42").style.backgroundColor="green";  
    document.getElementById("btn_start42").style.backgroundColor="green"; 
    hora_start=hora_inicio;  
}
function stop42(){    
    document.getElementById("btn_fim42").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop42").style.backgroundColor="red";
    document.getElementById("btn_stop42").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial42").innerHTML=(parcial); 
    tempofinal(parcial);
}

function start43(){
    document.getElementById("btn_inicio43").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start43").style.backgroundColor="green"; 
    document.getElementById("btn_start43").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop43(){    
    document.getElementById("btn_fim43").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop43").style.backgroundColor="red";
    document.getElementById("btn_stop43").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial43").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start44(){
    document.getElementById("btn_inicio44").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start44").style.backgroundColor="green";
    document.getElementById("btn_start44").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop44(){    
    document.getElementById("btn_fim44").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop44").style.backgroundColor="red";
    document.getElementById("btn_stop44").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial44").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start45(){
    document.getElementById("btn_inicio45").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start45").style.backgroundColor="green";
    document.getElementById("btn_start45").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop45(){    
    document.getElementById("btn_fim45").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop45").style.backgroundColor="red";
    document.getElementById("btn_stop45").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial45").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start46(){
    document.getElementById("btn_inicio46").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start46").style.backgroundColor="green";
    document.getElementById("btn_start46").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop46(){    
    document.getElementById("btn_fim46").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop46").style.backgroundColor="red"; 
    document.getElementById("btn_stop46").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial46").innerHTML=(parcial); 
    tempofinal(parcial);    
}

function start47(){
    document.getElementById("btn_inicio47").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start47").style.backgroundColor="green";
    document.getElementById("btn_start47").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop47(){    
    document.getElementById("btn_fim47").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop47").style.backgroundColor="red"; 
    document.getElementById("btn_stop47").style.backgroundColor="green"; 
    tempoparcial();
    document.getElementById("btn_parcial47").innerHTML=(parcial); 
    tempofinal(parcial);     
}

function start48(){
    document.getElementById("btn_inicio48").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start48").style.backgroundColor="green"; 
    document.getElementById("btn_start48").style.backgroundColor="green";  
    hora_start=hora_inicio;  
}
function stop48(){    
    document.getElementById("btn_fim48").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop48").style.backgroundColor="red";
    document.getElementById("btn_stop48").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial48").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start49(){
    document.getElementById("btn_inicio49").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start49").style.backgroundColor="green";
    document.getElementById("btn_start49").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop49(){    
    document.getElementById("btn_fim49").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop49").style.backgroundColor="red";
    document.getElementById("btn_stop49").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial49").innerHTML=(parcial);
    tempofinal(parcial);      
}

function start50(){
    document.getElementById("btn_inicio50").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_start50").style.backgroundColor="green";
    document.getElementById("btn_start50").style.backgroundColor="green";   
    hora_start=hora_inicio;  
}
function stop50(){    
    document.getElementById("btn_fim50").innerHTML=(hh+":"+mm+":"+ss);
    document.getElementById("btn_stop50").style.backgroundColor="red";
    document.getElementById("btn_stop50").style.backgroundColor="green";  
    tempoparcial();
    document.getElementById("btn_parcial50").innerHTML=(parcial);
    tempofinal(parcial);      
}


//Zera os valores preenchendo o Bg em branco e os dados com ---
function reset(){
    var iinicio=document.getElementsByClassName("botao_inicio");    
    for(i=0;i<iinicio.length;i++){
        iinicio[i].innerHTML="---";
    }

    var ffim=document.getElementsByClassName("botao_fim");    
    for(i=0;i<iinicio.length;i++){
        ffim[i].innerHTML="---";
    }

    var bbotao=document.getElementsByClassName("botao");
    for(i=0;i<bbotao.length;i++){
        bbotao[i].style.backgroundColor="white";
        bbotao[i].style.color="black";
    }
        
    var pparcial=document.getElementsByClassName("botao_parcial");
    for(i=0;i<pparcial.length;i++){
        pparcial[i].innerHTML="---";
    }
    
    document.getElementById("btn_total").innerHTML="---";
    total=0;    
       
}

