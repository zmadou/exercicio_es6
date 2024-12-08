const alunos = [{
    nome: 'Amanda',
    nota: 5
},
{
    nome: 'Ana',
    nota: 7
},
{
    nome: 'Carla',
    nota: 5
},
{
    nome: 'Daniel',
    nota: 8
},
{
    nome: 'Eduardo',
    nota: 4
},
{
    nome: 'Fernanda',
    nota: 10
},
{
    nome: 'Gustavo',
    nota: 6
},
{
    nome: 'Helena',
    nota: 9
},
{
    nome: 'Isabela',
    nota: 7
}]

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6)

console.log(alunosAprovados)