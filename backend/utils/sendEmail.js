const nodeMailer = require("nodemailer");

const sendEmail = async  (options) => {
    const transporter = nodeMailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        service:process.env.SMPT_SERVICE,
        auth:{
            // process.env.SMPT_MAIL,
            // process.env.SMPT_PASSWORD,
            user:"ryanmahapatra007@gmail.com",
            pass:"x._0015$hi$"
        }
    })

    const mailOptions = {
        from : process.env.SMPT_MAIL,
        to : options.email,
        subject : options.subject,
        text : options.message
    }

    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;