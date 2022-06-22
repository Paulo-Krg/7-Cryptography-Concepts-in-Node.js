const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./5_keypair");

const message = "this data must be signed";

/// SIGN

const signer = createSign("rsa-sha256");

signer.update(message);

const signature = signer.sign(privateKey, "hex");

/// VERIFY

const verifier = createVerify("rsa-sha256");

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(`Verified: ${isVerified}`);

/*
Signing is the process of creating a digital signature of a message.
A signature is a hash of the original message which is then encrypted with the sender’s private key.

The signature can be verfied by the recipient using the public key of the sender.
This can guarantee the original message is authentic and unmodified.
*/
