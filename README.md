A project for demonstrating how to use amqplib with TLS. See https://github.com/amqp-node/amqplib/issues/696. Follow [this guide](https://www.rabbitmq.com/ssl.html#manual-certificate-generation) to generate new certs/keys 

## Running

### Start RabbitMQ

```
docker-compose up
```

### Create a RabbitMQ user

Use the [management plugin](http://localhost:15672/#/users) to create a RabbitMQ user with the following details

- username `O=client,CN=${YOUR LOCAL MACHINE HOSTNAME}`
- password `password`

Grant the user access to the default vhost

### Connect using amplib

```
npm i
node index
```
