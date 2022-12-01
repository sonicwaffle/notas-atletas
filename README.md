Olá! Esse README.md serve para explicar o funcionamento do código notas-atletas.js.
O código foi feito pelo aluno Pedro Guilherme Rosa Lutz para concluir o curso de JavaScript da plataforma DEVstart.

O código começa com a definição da matriz de objetos instruída pela própria plataforma.
Cada objeto dessa matriz contém o nome de um atleta e as notas que ele atingiu.

Em seguida, é definida uma função chamada objAtletasComputado, com parâmetro i.
Essa função retorna a matriz notas do objeto i da matriz objetoAtletas, com os métodos sort e slice aplicadas à ela.
Essa função tem como objetivo simplificar os cálculos que utilizam as matrizes notas, já que
elas são chamadas diversas vezes dentro do código, e é inconveniente ter que convocar as matrizes
com vários métodos, várias vezes.

A próxima função é chamada de somaValida, que recebe o parâmetro i. 
Essa função realiza e retorna a soma de cada item das matriz i de notas já computada.

A terceira função é a mediaValida, com parâmetro i.
Ela simplesmente recebe a soma dos itens da matriz i computada e divide pelo número de itens dessa mesma matriz.

A última função é a função exibirInfo, sem parâmetro. 
Essa função não retorna nada, e simplesmente imprime no console as informações de cada atleta, sendo essas seu nome,
as notas que obteve e a média validada.

A última linha do código é onde a função exibirInfo é convocada, para que possa exibir na tela as informações dos atletas.
