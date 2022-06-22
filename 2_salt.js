const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");
var users = new Array();

function signup(email, password) {
	const salt = randomBytes(16).toString("hex");
	const hashedPassword = scryptSync(password, salt, 64).toString("hex");

	// Stores the password as 'randomBytes salt':'hashed user password + salt'
	const user = { email, password: `${salt}:${hashedPassword}` };

	users.push(user);

	return user;
}

function login(email, password) {
	const user = users.find((v) => v.email === email);

	const [salt, key] = user.password.split(":");
	const hashedBuffer = scryptSync(password, salt, 64);

	const keyBuffer = Buffer.from(key, "hex");
	const match = timingSafeEqual(hashedBuffer, keyBuffer);

	if (match) {
		console.log("Login success!");
		return "Login success!";
	} else {
		console.log("Login fail!");
		return "Login fail!";
	}
}

signup("example@email.com", "SuperSecretPassword");
signup("example2@email.com", "1234");
signup("example3@email.com", "hi-mom!");

console.log(users);

login("example@email.com", "SuperSecretPassword"); // Login success!
login("example@email.com", "WrongPassword"); // Login fail!

login("example2@email.com", "1234"); // Login success!
login("example3@email.com", "hi-mom!"); // Login success!

login("example2@email.com", "hi-mom!"); // Login fail!

/*
A salt is a random string that is added to the input before hashing.
This makes the hash more unique and harder to guess.
Users often to use weak passwords, like “password123”.

When a database is compromised, the attacker can easily find the value of an unsalted hash by searching precomputed rainbow table of common hashes - salting fixes this.
*/
