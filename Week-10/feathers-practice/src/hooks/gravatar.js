// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks, see: http://docs.feathersjs.com/api/hooks.html

// We need this to create the MD5 hash
const crypto = require('crypto');

const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { email } = context.data;
    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
    context.data.avatar = `${gravatarUrl}/${hash}?${query}`;
    return context;
  };
};