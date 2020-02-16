const mongoose = require('mongoose');

const MovimentacaoLog = mongoose.model('MovimentacaoLog');

module.exports = {
    async index(request, response) {
        const { p = 1 } = request.query;
        const movimentacaoLog = await MovimentacaoLog.paginate({}, {page: p, limit: 100});

        return response.json(movimentacaoLog);
    },

    async show(request, response) {
        const movimentacaoLog = await MovimentacaoLog.findById(request.params.id);

        return response.json(movimentacaoLog);
    },

    async destroy(request, response){
        const movimentacaoLog = await MovimentacaoLog.findByIdAndDelete(request.params.id);

        return response.send("log limpo com sucesso");
    }
};