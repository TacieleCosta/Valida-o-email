function validarEmail() {
    var email = document.getElementById('email').value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var mensagem = document.getElementById('mensagem');

    if (!regex.test(email)) {
        mensagem.textContent = 'Erro: Por favor, insira um endereço de e-mail válido. Exemplo: nome@dominio.com';
        mensagem.className = 'mensagem-erro';
        return false;
    } else {
        mensagem.textContent = 'E-mail validado com sucesso!';
        mensagem.className = 'mensagem-sucesso';
    }
    // Impedir o envio do formulário para demonstração
    return false;
}
