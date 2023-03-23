function sumar(a){
    b=parseInt(document.getElementById(a).innerHTML);
    b++;
    document.getElementById(a).innerHTML=b;
}

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
    var producto=document.getElementById('producto');
    if(menu.style.width=='0%'){
        menu.style.width='35%';
    }
    else{
        menu.style.width='0%';
        document.getElementsByClassName('producto').style.display='none';

    }

}