const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');


const CaixaSchema = new mongoose.Schema({
    id: {
        type: String
    },
    saldoTotal: {
        type: Number,
    },
    descricao: {
        type: String,
        required: true
    }
});

CaixaSchema.plugin(paginate);
mongoose.model('Caixa', CaixaSchema);