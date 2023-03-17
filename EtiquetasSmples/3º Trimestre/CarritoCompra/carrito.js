var nteclao=0;
var nraton=0;


function setCantidades(){
    if(localStorage.getItem('ratones')!=undefined){
        nraton=localStorage.getItem('ratones');
    }
    if(localStorage.getItem('teclados')!=undefined){
        nteclao=localStorage.getItem('teclados');
    }
}
setCantidades();





function mostrarCantidades(){
    document.getElementById('nteclado').innerHTML=nteclao;
    document.getElementById('nraton').innerHTML=nraton;
}
mostrarCantidades()

function masTeclado(){
    nteclao++;
    document.getElementById('nteclado').innerHTML=nteclao;
    localStorage.setItem('teclados', nteclao);

}
function menosTeclado(){
    nteclao--;
    if(nteclao<0){
        nteclao=0
    }
    localStorage.setItem('teclados', nteclao);
    document.getElementById('nteclado').innerHTML=nteclao;

}
function prueba(){
    document.getElementById('demo').innerHTML=localStorage.getItem('teclados');

}

function masRaton(){
    nraton++;
    document.getElementById('nraton').innerHTML=nraton;
    localStorage.setItem('ratones',nraton);
}
function menosRaton(){
    nraton--;
    if(nraton<0){
        nraton=0
    }

    localStorage.setItem('ratones',nraton);
    document.getElementById('nraton').innerHTML=nraton;

}

