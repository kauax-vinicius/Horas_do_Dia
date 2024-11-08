function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`; 

    if (hora >= 18 || hora < 5) { 
        img.src = "imagens/noite.jpg";
        document.body.style.background = '#2c3e50';
    } else if (hora >= 5 && hora < 12) {
        img.src = "imagens/dia.jpg";
        document.body.style.background = ' rgb(159, 188, 243)';
    } else {
        img.src = "imagens/tarde.jpg";
        document.body.style.background = '#f39c12'; 
    }
}
