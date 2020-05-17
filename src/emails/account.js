const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendWelcomeEmail = (email, name) => {
    // console.log('send mail');
    sgMail.send({
        to: email,
        from: 'axray@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welecome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'axray@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `Groodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
