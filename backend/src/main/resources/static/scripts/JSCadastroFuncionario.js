var selectElement = document.getElementById('SelectPerfil');

// Obtém a div "additionalInputs"
var additionalInputs = document.getElementById('additionalInputs');

// Função para verificar o valor inicial do select
function checkInitialValue() {
    var selectedValue = selectElement.value;
    if (selectedValue === '2') { // O valor '2' corresponde à opção "Médico"
        additionalInputs.style.display = 'block';
    } else {
        additionalInputs.style.display = 'none';
    }
}

// Adiciona um evento de mudança ao select
selectElement.addEventListener('change', function() {
    var selectedValue = selectElement.value;
    if (selectedValue === '2') { // O valor '2' corresponde à opção "Médico"
        additionalInputs.style.display = 'block';
    } else {
        additionalInputs.style.display = 'none';
    }
});

// Verifica o valor inicial quando a página é carregada
checkInitialValue();