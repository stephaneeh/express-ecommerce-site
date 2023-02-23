# Express Ecommerce Site

![License](https://img.shields.io/badge/License-mit-blue.svg)

## Description

This project was completed to build the back end of a e-commerce site using Express.js APIs and using Sequelize to interact with my MySQL database.

## Structure

- `server.js` The primary application script
- `\db` Holds the required mysql scripts to create and set up the initial application database


## Installation
In your command line interface (cli), navigate to the application directory and run the following commands:
```md
> npm install

```

## Usage
Set up your database by running the following command in your DB directory
```md
> mysql -u root
> SOURCE schema.sql;
> EXIT
```

Move to root directory of your proejct and run the following commands to seed your database and start the application
```md
> npm run seed
> npm start
```

## Link to video
https://drive.google.com/file/d/1hKga_3UeTuf3jZBlHQ8yx5A3-sQAr2TJ/view
