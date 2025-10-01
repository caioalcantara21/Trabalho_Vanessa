document.addEventListener('DOMContentLoaded', () => {
    // Adiciona aplicação do formulário com o evento de submit :)
    const form = document.querySelector('.form-contato');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso!');
            form.reset();
        });
    }
});
