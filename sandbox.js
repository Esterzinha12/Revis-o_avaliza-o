const crud = require("./crud");



async function executar() {
        const dado = {
            nome: "Eduarda B", idade: 18
        };
        // const resultado = await crud.getById("usuario", "bD9ED28yQt4ETGi9mfSO");
        // const resultado = await crud.get("usuario");
        // const resultado = await crud.remove("usuario", "bD9ED28yQt4ETGi9mfSO");
        // const resultado= await crud.save("usuario", undefined, dado);

        const resultado = await crud.getWithFilter("usuario", "idade", "!=", 23);
        console.log(resultado);
        
        // console.log(resultado.filter(e => {
        //     const r = e.idade.includes(17);
        //     // const r = e.nome.includes("Benner");
        //     // const r = e.idade == 17;
        //     console.log(r, e.nome, e.idade, e.id);
        //     return r;
        // }));

        // console.log("Existe: ", resultado.some(e => {
        //     const r = e.idade > 17;
        //     console.log(r, e.nome, e.idade, e.id);
        //     return r;
        // }));

        // console.log("Existe: ", resultado.map(e => {
        //     // const r = e.idade > 17;
        //     const r="O nome é: "+ e.nome;
        //     console.log(r, e.nome, e.idade, e.id);
        //     return r;
        // }));
}

executar().catch(e => console.log("Meu e: ", e));


