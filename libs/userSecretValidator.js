module.exports = {
    name: 'user_secret',
    type: 'string',
    validator: v => v.maxLength(18),
    failMsg: 'user_secret should be 18 chars max'
};
