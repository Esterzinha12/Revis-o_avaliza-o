const crud = require("../../crud");
const nomeTabela = "Livros";


//1- RECEBER OS DADOS POR PARÂMETRO:
//TITULO
//QUANTIDADE DE PAGINAS
//LISTA AUTORES
//2- VERIFICAR SE O TITULO FOI PREENCHIDO;
//3- VERIFICAR SE A QTD DE PAGINAS FOI PREENCHIDA;
//4- VERIFICAR SE FOI PASSADO PELO MENOS UM AUTOR;
//5- VERIFICAR SE O AUTOR ESTA CADASTRADO;
//6- RETORNAR UM ERRO CASO NÃO ATENDDA A UMA DAS CONDIÇÕES;
//7- REALIZAR O CADASTRO DO LIVRO;
//8- RETORNAR SUCESSO NO CADASTRO DE LIVRO

async function cadastrarLivro(dados = { titulo: "", qtdPaginas: 0, listaAutores: [] }) {
    if (!dados.titulo) {
        return { error: "0001", message: "É necessario preencher os perimetros da requisição", camposNecessarios: ["titulo"] };
    }
    if (typeof dados.qtdPaginas != "number") {
        return {
            error: "0001",
            message: "É necessario preencher os perimetros da requisição",
            camposNecessarios: typeof dados.qtdPaginas,
            tipoEsperado: "number"
        }
    }
    if (!Array.isArray(dados.listaAutores)) {
        return {
            error: "0002",
            message: "O tipo de dado passado não corresponde ao esperado",
            camposNecessarios: typeof dados.listaAutores,
            tipoEsperado: "array"
        }
    }
    if (!dados.qtdPaginas || !(dados.qtdPaginas > 0)) {
        return {
            error: "0002",
            message: "O tipo de dado passado não corresponde ao esperado",
            camposNecessarios: ["listaAutores"]
        }
    }
    if (await verificarListaAutoresCadastrados(dados.listaAutores)) {
        return {
            error: "0003",
            message: "Not found",
            situation: "Algum autor não esta cadastrado"

        }
    }

    const livro = await crud.save(nomeTabela, undefined, dados);
    return livro;
}
async function verificarListaAutoresCadastrados(list = []) {
    let naoCadastrado = false;
    console.log(list);
    for (const idAutor of list) {
        try {
            console.log(idAutor);
            await crud.getById("Autores", idAutor);
            console.log("encontrou");
        } catch (erro) {
            naoCadastrado = true;
            console.log("não encontrou");
            return naoCadastrado;
        }
    }
    return naoCadastrado;
}


module.exports = {
    cadastrarLivro
}
