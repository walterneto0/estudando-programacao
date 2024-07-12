function verificarDados() {
    const data = new Date();
    const ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    const res = document.getElementById('res');
    if (fano.value.length == 0 || Number(fano.value) > ano || ano - Number(fano.value) > 130) {
        alert("[ERRO] Insira valores válidos.");
    } else {
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fano.value);
        var genero = '';
        const img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino';
            document.body.style.background = '#4996ee';
            if (idade <= 2) {
                //bebe
                img.setAttribute('src', 'galery/bebe-m.jpg');
            } else if(idade <= 11) {
                //criança
                img.setAttribute('src', 'galery/crianca-m.jpg');
            } else if (idade <= 17) {
                //adolescente
                img.setAttribute('src', 'galery/adolescente-m.jpg');
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'galery/adulto-m.jpg');
            } else {
                //velho
                img.setAttribute('src', 'galery/velho-m.jpg');
            }
        } else {
            genero = 'Feminino';
            document.body.style.background = '#e38ffa';

            if (idade <= 2) {
                //bebe
                img.setAttribute('src', 'galery/bebe-f.jpg');
            } else if(idade <= 11) {
                //criança
                img.setAttribute('src', 'galery/crianca-f.jpg');
            } else if (idade <= 17) {
                //adolescente
                img.setAttribute('src', 'galery/adolescente-f.jpg');
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'galery/adulto-f.jpg');
            } else {
                //velho
                img.setAttribute('src', 'galery/velho-f.jpg');
            }
        }
        res.innerHTML = `Detectamos o gênero ${genero} e a idade ${idade}`;
        res.appendChild(img);
        img.style.width = '400px';
    }
}