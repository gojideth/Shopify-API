# Shopify-API
API development to use it as a shop service.
## Stack used
- Node.js with Express
- Prisma ORM
- PostgreSQL
- Docker
Requirements
------------

Shop-API requires the following to run (I recommend it to run on Linux or WSL2):
 


  * [Node.js][node] v16.14.2 or above, also to install it on [WSL] 
  * [npm][npm] (normally comes with Node.js)
  * [Docker][docker] and [Docker compose]
  * [npx]
  



[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[docker]: https://docs.docker.com/desktop/linux/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
[Docker compose]:https://docs.docker.com/compose/install/
[npx]:https://www.npmjs.com/package/npx
[WSL]: https://docs.microsoft.com/es-es/windows/dev-environment/javascript/nodejs-on-wsl
## Run Locally

Clone the project

```bash
  git clone https://github.com/gojideth/Shopify-API
```

Go to the project directory

```bash
  cd Shopify-API
```

Install dependencies

```bash
  npm install
```
Start docker process 
```bash
  sudo dockerd
```
Launch the PostgreSQL database server with the following command

```bash
  sudo docker compose up -d
```
Link env variable to Prisma 
```bash
  npx prisma generate
```
Generate database (only if it is the first time executing the project)
```bash
  npx prisma migrate dev --name "init"
```

Once the PostgreSQL database is running go ahead and start the server

```bash
  npm run start
```
Generate database
```bash
  npx prisma migrate dev --name "init"
```

