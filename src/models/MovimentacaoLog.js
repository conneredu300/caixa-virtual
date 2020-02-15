const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');


const MovimentacaoLogSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

MovimentacaoLogSchema.plugin(paginate);
mongoose.model('MovimentacaoLog', MovimentacaoLogSchema);