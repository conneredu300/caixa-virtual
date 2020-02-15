const mongoose = require("mongoose");

const Caixa = mongoose.model("Caixa");

module.exports = {
    async index(request, response){
        const { p = 1 } = request.query;
        const caixa = await Caixa.find();

        return response.json(caixa);
    },

    async create(request, response){
        const caixa = await Caixa.create(request.body);

        return response.json(caixa);
    },

    async destroy(request, response){
        const caixa = Caixa.findByIdAndDelete(request.body.id);

        return response.json(caixa);
    }       
};