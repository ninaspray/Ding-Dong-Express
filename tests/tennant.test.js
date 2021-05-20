const { expect } = require('chai');
const request = require('supertest');
const { Tennant } = require('../src/models/tennant');
const app = require('../src/app');

describe('/tennant', () => {
    before(done => {
        Tennant.sequelize
            .sync()
            .then(() => done())
            .catch(error => done(error));
    })
    beforeEach(done => {
        Tennant.destroy({ where: {} })
            .then(() => done()).catch(error => done(error));
    })
    describe('POST /tennant', () => {
        it('creates a new tennant in the database', (done) => {
            request(app).post('/tennant').send({
                name: 'Test',
                last_name: 'Smith',
                flat_number: 1,
                email: 'test@test.com',
            }).then(response => {
                expect(response.status).to.equal(201);
                done();
            }).catch(error => done(error));
        });
    });
});