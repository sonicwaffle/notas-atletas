//DEFINICAO DO OBJETO
let objetoAtletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
]

//FUNCAO SORT E SLICE
function objAtletasComputado(i){
    return objetoAtletas[i].notas.sort().slice(1,4)
} //fim funcao sort e slice

//FUNÇÃO CALCULO DE SOMA
function somaValida(i){
    let soma = [0, 0, 0, 0];
    objAtletasComputado(i).forEach(function (nota){
            soma[i] = soma[i] + nota; 
        
    })
    return soma[i];
}//fim funcao calculo de soma

//FUNCAO CALCULO DE MEDIA
function mediaValida(i){
    return somaValida(i)/objAtletasComputado(i).length
}//fim funcao calculo de media

//FUNCAO EXIBIR NA TELA
function exibirInfo(){
    for(let i = 0; i < 4; i++){
        console.log(`Atleta: ${objetoAtletas[i].nome}
Notas Obtidas: ${objetoAtletas[i].notas.join(",")}
Média Válida: ${mediaValida(i)}
        `)
    }
} //fim funcao exibir na tela

exibirInfo()