"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const createEmail_1 = require("./utils/createEmail");
const app = express_1.default();
exports.app = app;
require('dotenv').config();
const PORT = process.env.PORT || 8000;
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(body_parser_1.default.json());
app.post('/api', async (req, res) => {
    let { first, last, email, website, budget, description } = req.body;
    try {
        let transporter = await nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PW
            }
        });
        await transporter.verify();
        let info = await transporter.sendMail({
            from: `"Jesse Neumann" <${process.env.EMAIL}>`,
            to: email,
            bcc: process.env.EMAIL,
            subject: `${first}, I'm the developer for the job.`,
            html: createEmail_1.createEmail(req.body)
        });
        if (info.accepted.includes(email)) {
            res.status(200).json({
                status: 'success'
            });
        }
        else {
            res.status(505).json({
                status: 'failed'
            });
        }
    }
    catch (e) {
        res.status(505).json({
            status: 'failed'
        });
    }
});
app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map