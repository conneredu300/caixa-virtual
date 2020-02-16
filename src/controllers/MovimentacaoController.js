const mongoose = require('mongoose');

const CaixaController = require('./CaixaController');

const Movimentacao = mongoose.model('Movimentacao');
const MovimentacaoLog = mongoose.model('MovimentacaoLog');
const Caixa = mongoose.model('Caixa');

module.exports = {
    async index(request, response) {
        const movimentacao = await Movimentacao.find();
        let caixa = await Caixa.findOne();

        if (caixa == null){
            caixa = await Caixa.create({descricao: "Caixa2", saldoTotal: 0});
        }

        return response.json(
            {
                saldoTotal: caixa.saldoTotal,
                movimentacao: movimentacao
            });

        // await Movimentacao.deleteMany();
        // await MovimentacaoLog.deleteMany();
        // await Caixa.deleteMany();

        // return response.send("excluido com sucesso");
    },

    async store(request, response) {
        let params = {
            descricao: request.body.descricao || "entrada",
            tipo: request.body.tipo || "entrada",
            valor: request.body.valor
        };

        const movimentacao = await Movimentacao.create(params);

        params.data = movimentacao.data;
        await MovimentacaoLog.create(params);

        let caixa = await Caixa.findOne();
        
        if(movimentacao.tipo == "saida"){
            caixa.saldoTotal -= movimentacao.valor;
        }else{
            caixa.saldoTotal += movimentacao.valor;
        }
        
        await caixa.save();

        return response.json(movimentacao);
    },

    async show(request, response) {
        const movimentacao = await Movimentacao.findById(request.params.id);

        return response.json(movimentacao);
    }
};