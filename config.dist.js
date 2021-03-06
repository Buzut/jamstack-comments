process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
    siteUrl: 'https://my-blog.net', // without trailing slash
    manageCORS: true, // whether to manage CORS at app level (you wouldn't need it if your proxy handles CORS rules)
    adminEmail: 'hello@my-blog.net', // you'll have to leave at least one comment with admin email to be able to edit/delete comments
    userCanDeleteComments: false, // can user delete its own comments? (if false, only admin can)

    db: {
        // check options at https://knexjs.org/
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'blog_comments',
            charset: 'utf8mb4_unicode_ci'
        },

        // no need to change these
        usersTable: 'users',
        articlesTable: 'articles',
        commentsTable: 'comments',
        notificationsTable: 'notifications'
    },

    email: {
        // You can use either SMTP or Mailjet, keep only one config object

        // check options at https://www.npmjs.com/package/emailjs
        server: {
            user: 'hello@my-blog.net',
            password: 'xxxxx',
            host: 'smtp.your-email.com',
            ssl: true
            // tls: { ciphers: 'SSLv3' }
        },

        // if you prefer to use mailjet
        mailjet: {
            pubkey: 'xxxxx',
            privkey: 'xxxxx'
        },

        senderAddr: 'hello@my-blog.net',
        senderName: 'Buzut',
        commentValidationSubject: 'Confirm your comment on Buzut’s blog',

        // %name% and %link% will be dynamically replaced by their respective values (\n goes to next line)
        commentValidationBody: 'Hey %name%!\n\n Thank you very much for leaving a comment on my blog.\n\n Please, just to make sure you’re not a bot, click the following link:\n%link%\n\n Thank you :)',
        commentValidationTemplateId: 11111, // vars required in template --> name & link

        newCommentSubject: 'New comment on Buzut’s blog',
        newCommentBody: 'Hey %name%!\n\n I just wanted to let you know that there is a new comment on a conversation you subscribed to on Buzut’s blog.\n\n You might whant to check it out:\n %conversationlink%\n\n Also, if you want to usubscribe from this thread, just click this link %unsubscribelink%',
        newCommentTemplateId: 11111, // vars required in template --> name, conversationlink & unsubscribelink

        newCommentAdminBody: 'There was a new comment on this page:\n %conversationlink%\n\n Cheers!',
        newCommentAdminTemplateId: 11111, // var required in template --> conversationlink

        linkValidationAddrIsCommentPage: true, // validation link goes to article page or root domain
        linkTrailingSlash: true, // whether to add a slash at the end of the url before url params (buzut.net/article/?p=… VS buzut.net/article?p=…)
        commentsSectionAnchor: '#comments-section' // if you want to integrate the comments anchor in new comment link notif
    },

    // this doesn't need to be changed either
    cacheDirs: {
        ext: '.json',
        siteInfos: './static/site', // file & dir here (res: ./infos.site.json)
        article: './static/'
    },

    // production only,
    // in development, logs are outputed to the console and ./applogs.log
    appLogFile: './jamComments.log',
    port: 8888
};
