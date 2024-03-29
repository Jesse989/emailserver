import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

import { createEmail, ContactInfo } from './utils/createEmail';

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());

app.post('/api', async (req: Express.Request, res: Express.Response) => {
  let { first, last, email, website, budget, description } = req.body;
  // create email:
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // process.env.EMAIL, // generated ethereal user
        pass: process.env.PW // generated ethereal password
      }
    });

    await transporter.verify();

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Jesse Neumann" <${process.env.EMAIL}>`,
      to: email, // list of receivers
      bcc: process.env.EMAIL,
      subject: `${first}, I'm the developer for the job.`, // Subject line
      html: createEmail(req.body)
    });

    if (info.accepted.includes(email)) {
      res.status(200).json({
        status: 'success'
      });
    } else {
      res.status(505).json({
        status: 'failed'
      });
    }
  } catch (e) {
    res.status(505).json({
      status: 'failed'
    });
  }
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

export { app };
