// Exercício 16: Conta bancária
// Crie um objeto conta que represente uma conta bancária. Ele deve conter propriedades como saldo e
// titular e métodos para depositar, sacar e verSaldo.

let conta = {
    titular: "Igor",
    saldo: 1000,

    depositar: function(valor) {
        this.saldo += valor;
    },

    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    },

    verSaldo: function() {
        return this.saldo;
    }
};

conta.depositar(500);
console.log(conta.verSaldo());

conta.sacar(200);
console.log(conta.verSaldo());