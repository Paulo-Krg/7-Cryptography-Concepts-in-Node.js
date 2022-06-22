const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

/// Cipher

const message = 'i like turtles';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

/// Encrypt

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);

/*
Encryption is the process making a message confidential (like a hash), while allowing it to be reversable (decrypted) with the proper key.
Each time a message is encrypted it is randomized to produce a different output.
In symmetric encryption, the same key is used to encrypt and decrypt the message.

- The same input will produce a different output, unlike hashes.
- Encrypted message can be reversed with the key.
- Same key used to encrypt and decrypt the message.
*/
