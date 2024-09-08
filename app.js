document.addEventListener('DOMContentLoaded', function() {
    const resultado = document.getElementById('texto');
    const botoes = document.querySelectorAll('input[type="button"]');

    botoes.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.value;

            if (value === 'C') {
                limparResultado();
            } else if (value === '=') {
                calcularResultado();
            } else {
                adicionarValor(value);
            }
        });
    });

    function limparResultado() {
        resultado.value = '';
    }

    function calcularResultado() {
        try {
            resultado.value = eval(resultado.value);
        } catch (e) {
            resultado.value = 'Error';
        }
    }

    function adicionarValor(value) {
        resultado.value += value;
    }
});