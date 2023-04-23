# Flower-Shop-Full-Stack-Project

# Project Support

### API-Introduction

Project Support is an open source platform that enable users share causes they're passionate about and actively involved with with the hopes of connecting with other users equally interested in working with them on the given cause.

### Project Support Features

- Users can signup and login to their accounts
- Public (non-authenticated) users can access all causes on the platform
- Authenticated users can access all causes as well as create a new cause, edit their created cause and also delete what they've created.

### Installation Guide

- Clone this repository [here](https://github.com/itselenasinh/Flower-Shop-Full-Stack-Project).
- The develop branch is the most stable branch at any given time, ensure you're working from it.
- Run npm install to install all dependencies
- You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
- Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Usage

- Run npm start:dev to start the application.
- Connect to the API using Postman on port 3000.

### API Endpoints: Cita

| HTTP Verbs | Endpoints      | Action                                |
| ---------- | -------------- | ------------------------------------- |
| POST       | /api/citas     | To create a new citas                 |
| POST       | /api/citas/:id | To update citas                       |
| GET        | /api/citas     | To retrieve all citas on the platform |
| GET        | /api/citas/:Id | To retrieve details of a single citas |
| DELETE     | /api/citas/:id | To delete a single citas              |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [bcrypt](https://www.npmjs.com/package/bcrypt) is cryptographic hashing algorithm, recommended for password hashing.
- [helmet](https://helmetjs.github.io/) helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws
- [morgan](https://www.npmjs.com/package/morgan) is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process.
- [pg](https://www.npmjs.com/package/pg) Essentially, node-postgres is a collection of Node. js modules for interfacing with a PostgreSQL database.
- [pg-hstore](https://www.npmjs.com/package/pg-hstore) A node package for serializing and deserializing JSON data to hstore format
- [sequelize](https://sequelize.org/) is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.
- [cors](https://developer.mozilla.org/es/docs/Web/HTTP/CORS) Cross-Origin Resource Sharing or cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [DBeaver](https://www.dbeaver.io/) Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases.

### Authors

- [Elena García](https://github.com/itselenasinh)
- [Mairen Rendón](https://github.com/Mairendon)
- [Tania Fomiuk](https://github.com/tfomyuk)

### License

This project is available for use under the MIT License.
![]()
