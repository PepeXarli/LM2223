function no(id) {
    document.getElementById(id).style.backgroundColor='transparent'
}
function si(id,color){
    document.getElementById(id).style.backgroundColor=color
}

function cambiar(id, color){

if (document.getElementById(id).style.backgroundColor=='transparent'){

    document.getElementById(id).style.backgroundColor=color;
}

else{
    document.getElementById(id).style.backgroundColor='transparent';
}

}