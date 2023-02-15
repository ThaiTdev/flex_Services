const nodeMailer = require("nodemailer");
require("dotenv").config();
const Email = process.env.EMAIL;
const password = process.env.PASSWORD;

const transport = nodeMailer.createTransport({
  service: "hotmail",
  auth: {
    user: Email,
    pass: password,
  },
});

module.exports.sendConfirmationEmail = (email, activationCode) => {
  transport
    .sendMail({
      from: "t.thai@outlook.fr",
      to: email,
      subject: "Confirmer votre compte 'Flex'",
      html: `<div>
    <h1>Email de confirmation</h1>
    <h2>Bonjour ${email},</h2>
    <p>Pour validez votre compte, veuillez cliquer sur ce lien</p>
    <a href=http://localhost:3000/emailConfirm/${activationCode}>Cliquez ici!</a></div>`,
    })
    .catch((err) => console.log(err));
};

module.exports.sendModifPassword = (email, token) => {
  transport
    .sendMail({
      from: "t.thai@outlook.fr",
      to: email,
      subject: "Modifier votre Mot de passe 'Flex'",
      html: `<div>
    <h1>Email pour la modification du mot de passe</h1>
    <h2>Bonjour ${email},</h2>
    <p>Pour modifier votre mot de passe, cliquer sur ce lien</p>
    <a href=http://localhost:3000/resetPassword/${token}>Cliquez ici!</a></div>`,
    })
    .catch((err) => console.log(err));
};
// transport.sendMail(
//   {
//     from: "t.thai@outlook.fr",
//     to: "thaithierry3@gmail.com",
//     subject: "Confirmer votre compte",
//     html: `<div>
//     <h1>Email de confirmation</h1>
//     <h2>Bonjour,</h2>
//     <p>Pour validez votre compte, veuillez cliquer sur ce lien</p>
//     <a href=http://localhost:5000/api//Cliquez ici!</a></div>`,
//   },
//   (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info.response);
//     }
//   }
// );
