const email = require('emailjs');
const config = require('../config');

const emailServer = email.server.connect(config.email.server);

/**
 * Send an email
 * @param { (String | Array) } to
 * @param { String } text
 * @param { String } subject
 * @return { Promise }
 */
function sendMail(to, subject, text) {
    return new Promise((resolve, reject) => {
        emailServer.send({
            to,
            subject,
            text,
            from: config.email.senderAddr
        }, (err, msg) => {
            if (err) return reject(new Error(err));
            return resolve(msg);
        });
    });
}

/**
 * Send email confirmation to validate new comment
 * @param { Object } param
 * @param { String } param.to
 * @param { String } param.name
 * @param { String } param.md5Email
 * @param { String } param.secret
 * @param { Number } param.commentId
 * @return { Promise }
 */
function sendNewCommentValidationMail({ userName, userEmail, userMd5Email, userSecret, commentId }) { // eslint-disable-line
    const linkParams = encodeURIComponent(JSON.stringify({ md5_email: userMd5Email, user_secret: userSecret, comment_id: commentId }));
    const link = `${config.siteUrl}?p=${linkParams}`;

    return sendMail(userEmail, config.email.commentValidationSubject, config.email.commentValidationBody.replace('%name%', userName).replace('%link%', link));
}

// function sendNewCommentNotification(to, name, link) {
//
// }

module.exports = { sendNewCommentValidationMail };
