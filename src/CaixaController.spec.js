import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

//configurando chai
chai.use(chaiHttp);
chai.should();

const assert = require('assert');

describe('caixa-index.js', () => {
    describe("GET /api/caixa", () => {
        it("Deve retornar o objeto caixa", (done) => {
            chai.request(app)
            .get('/api/caixa')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
        })
    })
});