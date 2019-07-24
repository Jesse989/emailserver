const chai = require('chai');
const chaiHttp = require('chai-http');
const { app } = require('../build/server');

const should = chai.should();

chai.use(chaiHttp);

describe('email server', () => {
  it('indicates email delivery success', done => {
    let contactInfo = {
      first: 'Jesse',
      last: 'Neumann',
      email: 'jesseneumann@gmail.com',
      website: 'www.yahoo.com',
      budget: '12000',
      spam: '3',
      description: 'I want some stuff'
    };
    chai
      .request(app)
      .post('/api')
      .type('application/json')
      .send(JSON.stringify(contactInfo))
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.eql({ status: 'success' });
        done();
      });
  });

  it('indicates email delivery failure', done => {
    let contactInfo = {
      first: 'Jesse',
      last: 'Neumann',
      email: '',
      website: 'www.yahoo.com',
      budget: '12000',
      spam: '3',
      description: 'I want some stuff'
    };

    chai
      .request(app)
      .post('/api')
      .type('application/json')
      .send(JSON.stringify(contactInfo))
      .end((err, res) => {
        res.should.have.status(505);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.eql({ status: 'failed' });
        done();
      });
  });
});
