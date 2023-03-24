var carro = [
    {id:0, titulo:'teclado', precio:34.90, uds:0},
    {id:1, titulo:'raton', precio:109.89, uds:0},
    {id:2, titulo:'monitor', precio:228.60, uds:0},
    {id:3, titulo:'disco', precio:28.99, uds:0},
    {id:4, titulo:'movil', precio:1289.00, uds:0},
    {id:5, titulo:'altavoz', precio:119.99, uds:0},


]


function sumar(a){

    let producto=carro[a];
    producto['uds']++;
    carro[a]=producto;
    document.getElementById('id'+a).value=producto['uds'];
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