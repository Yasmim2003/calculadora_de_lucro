let horasDiarias = document.querySelector("#horas-diarias");
let diaMes = document.querySelector("#dias-mes");
let dispesas = document.querySelector("#despesas");
let equipamentos = document.querySelector("#equipamentos");

let valorTotal = document.querySelector("#valor-total");
let hidden = document.querySelector("#resultado");

const botao = document.querySelector("#calcular");

botao.addEventListener("click", function (e) {

    e.preventDefault();
    if (horasDiarias.value == "" || diaMes.value == "" || dispesas.value == "") {
        alert("Preencha os campos vazios");
    }
    else {
        let equipamentoMes = (Number(equipamentos.value) / 12);
        let despesasTotais = Number(despesas.value) + equipamentoMes;

        let horasMes = Number(horasDiarias.value) * Number(diaMes.value);

        const valorHora = ((despesasTotais / horasMes) / 0.5).toFixed(2);

        hidden.classList.remove("hidden")

        resultado.innerText = `R$ ${valorHora}`
    }


});