const express = require('express');
const routes = express.Router();

const CaixaController = require('./controllers/CaixaController');
const MovimentacaoController = require('./controllers/MovimentacaoController');
const MovimentacaoLogController = require('./controllers/MovimentacaoLogController');

routes.get('/movimentacao', MovimentacaoController.index);
routes.get('/movimentacao/:id', MovimentacaoController.show);
routes.post('/movimentacao/', MovimentacaoController.store); //Entrada de caixa
routes.delete('/movimentacao/:id', MovimentacaoController.destroy); //Saída de caixa

routes.delete('/movimentacao-log/:id', MovimentacaoLogController.destroy); //Excluir log
routes.get('/movimentacao-log/', MovimentacaoLogController.index); //Logs das movimentações
routes.get('/movimentacao-log/:id', MovimentacaoLogController.show);

routes.get('/caixa', CaixaController.index);
routes.post('/caixa', CaixaController.create);
routes.delete('/caixa/:id', CaixaController.destroy);

module.exports = routes;