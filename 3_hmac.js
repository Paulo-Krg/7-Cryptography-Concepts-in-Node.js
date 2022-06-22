const { createHmac } = require('crypto');

const key = 'super-secret!';
const message = 'boo 👻';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

const key2 = 'other-password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);

/*
Hash-based Message Authentication Code (HMAC) is a keyed hash of data - like a hash with a password.
To create a HMAC you need to have the key, therefore allowing you to verify both the authenticity and originator of the data.
Using a different key produces a different output.

Think of HMAC as a hash with a password or key.
Only someone with the key can create an authentic hash.
*/
