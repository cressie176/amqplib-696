const amqplib = require('amqplib');
const fs = require('fs');
const path = require('path');

var opts = {
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'client', 'client_certificate.pem')),
  key: fs.readFileSync(path.join(__dirname, 'certs', 'client', 'private_key.pem')),
  passphrase: 'MySecretPassword',
  ca: [fs.readFileSync(path.join(__dirname, 'certs', 'testca', 'ca_certificate.pem'))],
  rejectUnauthorized: false
};

(async () => {
  const connection = await amqplib.connect('amqps://localhost', opts);
  connection.on('error', (error) => {
  	console.log({ error });
  })

  const channel = await connection.createConfirmChannel();
  channel.on('error', (error) => {
  	console.log({ error });
  })

  await channel.assertQueue('q-696', { autoDelete: true })

  await channel.close();

  await connection.close();

  console.log('ok');

})();
