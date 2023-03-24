var carro = [
    {id:0, titulo:'teclado', precio:34.90, uds:0},
    {id:1, titulo:'raton', precio:109.89, uds:0},
    {id:2, titulo:'monitor', precio:228.60, uds:0},
    {id:3, titulo:'disco', precio:28.99, uds:0},
    {id:4, titulo:'iphone', precio:1289.00, uds:0},
    {id:5, titulo:'altavoz', precio:119.99, uds:0},

]


function sumar(a){
    let producto=carro[a];
    producto['uds']++;
    carro[a]=producto;
    document.getElementById('id'+a).innerHTML=producto['uds'];
    localStorage.setItem('carro', JSON.stringify(carro));
    refrescar();
}

function restar(a){
    let producto=carro[a];
    if(producto['uds']>0){
        producto['uds']--;
        carro[a]=producto;
    }
    document.getElementById('id'+a).innerHTML=producto['uds'];
    localStorage.setItem('carro', JSON.stringify(carro));
    refrescar();
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

function refrescar(){
    let listaCompra=document.getElementById('lista')
    listaCompra.innerHTML='';
    let total=0;

    for(let i=0;i<carro.length;i++){
        
        let producto=carro[i];
        if(producto['uds']>0){
            let nodo=document.createElement('div');
            let img=document.createElement('img');
            img.src=i+'.png';
            let texto=document.createTextNode(' '+producto['precio']+' '+ producto['uds']);
            document.getElementById('id'+i).innerHTML=producto['uds'];
            let full=img+texto
            nodo.appendChild(full);
            listaCompra.appendChild(nodo);
            total=total+producto['uds']*producto['precio'];
        }
    }
    document.getElementById('total').innerHTML = 'Total: ';
}