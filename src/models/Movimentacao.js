const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');


const MovimentacaoSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    valor: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

MovimentacaoSchema.plugin(paginate);
mongoose.model('Movimentacao', MovimentacaoSchema);