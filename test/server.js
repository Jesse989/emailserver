const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  app
} = require('../build/server');

const should = chai.should();

chai.use(chaiHttp);

describe('email server', () => {
  let contactInfo = {};
  const email = process.env.EMAIL;

  beforeEach(() => {
    process.env.EMAIL = email;
    contactInfo = {
      first: 'Jesse',
      last: 'Neumann',
      email: 'jesseneumann@gmail.com',
      spam: '3',
      description: 'I want some stuff'
    };
  });

  it('indicates email delivery success', done => {
    chai
      .request(app)
      .post('/api')
      .type('application/json')
      .send(JSON.stringify(contactInfo))
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.eql({
          status: 'success'
        });
        done();
      });
  });
  it('responds with 505 and "failed" if given invalid gmail creds', done => {
    // invalid email:
    process.env.EMAIL = 'invalid';

    chai
      .request(app)
      .post('/api')
      .type('application/json')
      .send(JSON.stringify(contactInfo))
      .end((err, res) => {
        res.should.have.status(505);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.eql({
          status: 'failed'
        });
        done();
      });
  });

  it('indicates email delivery failure', done => {
    contactInfo.email = '';
    chai
      .request(app)
      .post('/api')
      .type('application/json')
      .send(JSON.stringify(contactInfo))
      .end((err, res) => {
        res.should.have.status(505);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.eql({
          status: 'failed'
        });
        done();
      });
  });
});