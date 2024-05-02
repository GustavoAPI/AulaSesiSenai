const form = document.getElementById("reservaForm");

if (form) { // Verifica se o formulário existe
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir recarregamento da página

        // Recuperar as reservas existentes no Local Storage
        let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        // Verificar se o número total de reservas é 10 ou mais
        if (reservas.length >= 10) { 
            alert("Estacionamento cheio! Não é possível cadastrar mais vagas."); // Alerta de limite atingido
            return; // Interrompe a execução para impedir a submissão do formulário
        }
        
        // Informações sobre o formulário
        console.log("Formulário enviado."); 

        // Criar a nova reserva
        const reserva = {
            placa: this.placa.value,
            proprietario: this.proprietario.value,
            apartamento: this.apartamento.value,
            bloco: this.bloco.value,
            modelo: this.modelo.value,
            cor: this.cor.value,
            vaga: this.vaga.value
        };

        // Adicionar a nova reserva ao Local Storage
        reservas.push(reserva); 
        localStorage.setItem("reservas", JSON.stringify(reservas)); 
        
        // Verificar a atualização do Local Storage
        console.log("Reservas após a atualização:", reservas); // Exibe as reservas após adicionar a nova

        alert("Reserva realizada com sucesso!"); // Confirmação de sucesso

        this.reset(); // Limpa o formulário após o envio
    });
} else {
    console.error("Formulário 'reservaForm' não encontrado."); // Mensagem de erro para depuração
}
