function carregar() {
    var msg = document.querySelector('div#msg p');
    var imagem = document.querySelector('div#imagem img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `São ${hora} horas`;
    if (hora < 12) {
        imagem.src = 'galery/foto-manha.jpg';
        document.body.style.background = '#efe789';
    } else if (hora >= 12 & hora < 18) {
        imagem.src = 'galery/foto-tarde.jpg';
        document.body.style.background = '#c18907';        
    } else {
        imagem.src = 'galery/foto-noite.jpg';
        document.body.style.background = '#22224e';        
    }
}
