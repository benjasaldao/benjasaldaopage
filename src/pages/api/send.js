import nc from 'next-connect';
import nodemailer from 'nodemailer';

const handler = nc().post(async (req, res) => {
  const { name, email, message } = req.body;
  const mail = {
    from: process.env.SMTP_EMAIL,
    to: process.env.RECIEVER_EMAIL,
    subject: `${name} en BenjaSaldao.com!`,
    html: `Nombre: ${name} <br/> Email: ${email} <br/> Mensaje: <br/> ${message}`,
  };
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  try {
    const response = await transporter.sendMail(mail);
    res.json(response);
  } catch (err) {
    res.send(err);
  }
});

export default handler;
