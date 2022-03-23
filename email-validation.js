function validateEmail(email) {
	var re = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
	return re.test(email);
}

const emails = [
	'a@gmail.com',
	'ab@yahoo.com',
	'abc@hotmail.com',
	'@gmail.com',
	'ab@gmail.',
	'@#abc@gmail.com',
];

for (let email of emails) {
    console.log(email, validateEmail(email));
}

