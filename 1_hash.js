const { createHash } = require("crypto");

// Create a string hash

function hash(input) {
	return createHash("sha256").update(input).digest("hex");
	//return createHash('sha256').update(input).digest('base64');
}

// Comparing two hashed passwords
let password = "hi-mom!";
const hash1 = hash(password);
console.log(hash1);

password = "hi-mom!";
const hash2 = hash(password);
console.log(hash2);

const match = hash1 === hash2;
console.log(match ? "✔️  password matches" : "❌  password does not match");

/* 
Hashing algorithms, like SHA (Secure Hashing Algorithm), produce a random, unique, fixed-length string from a given input. 
- The same input will always produce the same output
- Fast to compute, but computationally expensive to find the original input
- Small probability of collision (unique)
*/
