function pesquisa_binaria(lista, item){
    var baixo = 0;
    var alto = lista.length - 1;

    while (baixo <= alto){
        const medio = Math.floor((baixo + alto) /2);
        const chute = lista[medio];

        if (chute === item){
            return medio;
        } else if (chute < item){
            baixo = medio + 1
        } else{
            alto = medio - 1;
        }
    }
    return null;
}
const minha_lista = [1, 3, 4, 8, 9, 10, 13, 16, 18, 19];
console.log(pesquisa_binaria(minha_lista, 1));
console.log(pesquisa_binaria(minha_lista, 13));