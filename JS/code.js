let exit = 0
while(exit!=1){
    let dni =prompt("Digite su DNI");
    if (dni.length===8 || dni.length===7) {
        if (dni!=0000000 && dni !=00000000) {
            console.log('Su dni es ' + dni);
            exit+=1;
        }else {
            alert("su dni no es valido por favor vuelva a ingresarlo");
        }
    }else {
        alert("su dni no es valido por favor vuelva a ingresarlo");
    }
}

console.log("Que tenga un buen dia");