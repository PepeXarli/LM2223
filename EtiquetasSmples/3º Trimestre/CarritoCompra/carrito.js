function sumar(a){
    b=parseInt(document.getElementById(a).innerHTML);
    b++;
    document.getElementById(a).innerHTML=b;
}
/*
function sumar(a){
    b=parseInt(document.getElementsByClassName(a).innerHTML);
    b++;
    document.getElementById(a).innerHTML=b;
}*/

function restar(a){
    b=parseInt(document.getElementById(a).innerHTML);
    b--;
    if(b<0){
        b=0;
    }
    document.getElementById(a).innerHTML=b;
}

function carrito(){
    var menu=document.getElementById('menucarrito');
    /*var producto=document.getElementById('producto');*/
    if(menu.style.left=='-35.5%'){
        menu.style.left='0%';
    }
    else{
        menu.style.left='-35.5%';

    }

}