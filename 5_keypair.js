const { generateKeyPairSync } = require("crypto");

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
	modulusLength: 2048, // the length of your key in bits
	publicKeyEncoding: {
		type: "spki", // recommended to be 'spki' by the Node.js docs
		format: "pem",
	},
	privateKeyEncoding: {
		type: "pkcs8", // recommended to be 'pkcs8' by the Node.js docs
		format: "pem",
		// cipher: 'aes-256-cbc',
		// passphrase: 'top secret'
	},
});

// console.log(publicKey);
// console.log(privateKey);

module.exports = {
	privateKey,
	publicKey,
};

/*
Using a shared key works for encryption works, but the problem is that both parties must agree upon the key.
This is problematic in the real world because it’s not practical or secure to share across a network.

The solution is to use an algoritm like RSA that generates a keypair containing a public and private key.
As their names indicate, the private key should be kept secret, while the public key can be shared freely.
*/
