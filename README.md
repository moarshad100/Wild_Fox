# Entertainment Review ![badge](https://img.shields.io/badge/Project%202-blue) ![License: MIT](https://badgen.net/badge/License/MIT/?icon=github)

## Table of Contents

- [Description](#description)
- [About Us](#about-us)
- [Key Features](#key-features)
    - [Diverse Entertainment Categories](#1-diverse-entertainment-categories)
    - [User Reviews and Ratings](#2-user-reviews-and-ratings)
    - [Personalized Recommendations](#3-personalized-recommendations) 
    - [Community Engagement](#4-community-engagement)
    - [User-Friendly Interface](#5-user-friendly-interface)
    - [Upcoming Releases](#6-upcoming-releases)
- [Join Our Community](#join-our-community)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Seeding](#seeding)
  - [Starting the server](#starting-the-server)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Links](#links)

## Description

<p>In our second bootcamp project our team decided to build a website for reviewing Games, Movies and TV shows.</p>
<p>We have fleshed out our ideas on our initial brainstorming session and seetled on creating a website for reviewing entertainment media (Games, Movies and Tvshows)</p>
<p>We have decided to work on different components of our projects.</p>

* <b>Team-Head</b> Jesse Chen is responsible for the front-end, functionalities and debugging.
* <b>Team-Member</b> Renny Mwangi is responsible for creating the routes and debugging.
* <b>Team-Member</b> Mohammed Arshad is responsible for creating the database,seeds and relations.
* <b>Team-Member</b> Tanya Du has contributed to the database.

Along our way we have encountered few challenges in achieving our goals. Some of the challenges are as follows:

* We had no prior knowledge of full stack development.
*  There is a substantial amount of documentation to refer when working with 3rd party packages like Sequelize and Handlebars.
* We have encountered few issues because the front-end and back-end did not line up at the beginning of the project.
* Modification to the database, were made during the midway of the project.
* We had difficulties in setting up Tailwind and Flowbite.

Welcome to our Entertainment Review Platform, the ultimate destination for movie, game, and TV show enthusiasts to discover, review, and discuss their favorite entertainment experiences!
## About Us

Our platform is dedicated to providing a comprehensive and user-friendly space for entertainment lovers to come together, share their thoughts, and explore a wide range of media content. Whether you're passionate about movies, games, or TV shows, our platform has you covered.

## Key Features

### 1. Diverse Entertainment Categories

Explore a vast library of content across different categories:

- **Movies:** Dive into the world of cinema with reviews, ratings, and discussions about the latest releases and timeless classics.

- **Games:** Unleash your inner gamer by discovering new games, sharing gameplay experiences, and discussing strategies and updates.

- **TV Shows:** Stay up-to-date with your favorite TV series, share episode reviews, and engage in conversations with fellow fans.

### 2. User Reviews and Ratings

Get real insights from our vibrant community of reviewers. Read and write detailed reviews, rate your favorite entertainment titles, and express your opinions on what's hot and what's not.

### 3. Personalized Recommendations

Our platform leverages advanced algorithms to recommend content tailored to your preferences. Discover hidden gems and new releases that match your tastes.

### 4. Community Engagement

Connect with like-minded entertainment enthusiasts, join discussions, and participate in polls, debates, and challenges. Engage with fellow users who share your passion for entertainment.

### 5. User-Friendly Interface

Navigate our platform with ease. Our intuitive and responsive design ensures a seamless browsing experience on both desktop and mobile devices.

### 6. Upcoming Releases

Stay in the loop with our curated list of upcoming movies, games, and TV shows. Plan your entertainment journey and set reminders for release dates.

## Join Our Community

Whether you're a cinephile, a dedicated gamer, or a TV show fanatic, our Entertainment Review Platform is your hub for all things entertainment. Join our community today to share, discover, and discuss your favorite movies, games, and TV shows!

![Image](/images/homepage.png)

## Technologies Used

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Flowbite](https://img.shields.io/badge/Flowbite-Purple?style=for-the-badge&logo=tailwind-css&logoColor=White)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

- Dependencies: sequelize (v5.22.5), mysql2 (v2.3.3), express (v4.17.1), dotenv (v8.6.0), nodemon (v2.0.3)
- Testing: Insomnia

### Why is this significant?

<p>We consume entertainment media for various reasons which also includes emotional, social and psychological reasons </p>

`
Reviewing an entertainment media can be beneficial to both the consumers and creators. For consumers it can provide value for money and time. Whereas, for creators it can provide insight for improvement and engagement.`

## Installation
[![npm](https://badgen.net/badge/bcrypt/v5.0.0/)](https://www.npmjs.com/package/bcrypt/v/5.0.0)
[![connect session sequelize](https://img.shields.io/badge/connect_session_sequelize-v7.0.4-green)](https://www.npmjs.com/package/connect-session-sequelize/v/7.0.4)
[![dotenv](https://img.shields.io/badge/dotenv-v8.2.0-red)](https://www.npmjs.com/package/dotenv/v/8.2.0)
[![express](https://img.shields.io/badge/express-v4.17.1-yellow)](https://www.npmjs.com/package/express/v/4.17.1)
[![express handlebars](https://img.shields.io/badge/express_handlebars-v5.2.0-seafoam)](https://www.npmjs.com/package/express-handlebars/v/5.2.0)
[![express sessions](https://img.shields.io/badge/express_sessions-v1.17.1-cyan)](https://www.npmjs.com/package/express-session/v/1.17.1)
[![flowbite](https://img.shields.io/badge/flowbite-v1.8.1-magenta)](https://www.npmjs.com/package/flowbite)
[![mysql2](https://img.shields.io/badge/mysql2-v2.2.5-purple)](https://www.npmjs.com/package/mysql2/v/2.2.5)
[![sequelize](https://img.shields.io/badge/sequelize-v6.3.5-indigo)](https://www.npmjs.com/package/sequelize/v/6.3.5)
[![tailwindcss](https://img.shields.io/badge/tailwindcss-v3.3.3-orange)](https://www.npmjs.com/package/tailwindcss/v/3.3.3)

1. Clone the repository: `git clone https://github.com/JesseCh3n/entertainment_review.git`
2. Open in VS Code. If not installed, [install VS Code](https://code.visualstudio.com/).
3. Install Node.js v16 (e.g., using npm: `npm i node@16`).
4. Install from package.json: `npm i`
5. To install dependencies independently:
    - **bcrypt**: `npm i bcrypt@5.0.0`
    - **connect-session-sequelize**: `npm i connect-session-sequelize@7.0.4`
    - **dotenv**: `npm i dotenv@8.2.0`
    - **express**: `npm i express@4.17.1`
    - **express-handlebars**: `npm i express-handlebars@5.2.0`
    - **express-session**: `npm i express-session@1.17.1`
    - **flowbite**: `npm i flowbite@1.8.1`
    - **mysql2**: `npm i mysql2@2.2.5`
    - **sequelize**: `npm i sequelize@6.3.5`
    - **tailwindcss**: `npm i tailwindcss@3.3.3`

    Dev Dependencies:

    - **eslint**: `npm i eslint@7.12.1`
    - **eslint-config-prettier**: `npm i eslint-config-prettier@6.15.0`
    - **prettier**: `npm i prettier@2.1.2`
    - **tailwindcss**: `npm i tailwindcss@3.3.3`

6. Create a `.env` file in the project root directory to store your environment variables. This file should contain sensitive information like database credentials and API keys. Here's an example .env file:
    
    ```
    # .env
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    SESSION_SECRET=
    ```

### Database Setup

If you don't have a MySQL account, [create one](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

1. Navigate to the `db` directory containing the `schema.sql` file.
2. Open a MySQL shell: `mysql -u root -p` (enter your password when prompted).
3. Inside the MySQL shell, run: `source schema.sql` to create the database.

### Seeding

1. Navigate to the root directory of the repository.
2. Run: `npm run seed` to seed the database and create table structures.

Now your database is populated with initial data and ready for testing.

### Starting the Server

1. With the terminal open in the root directory, run: `npm start` to start the server.
2. The server will start, and you'll see a message indicating that it's running.
3. After starting the application, you can initialize Tailwind CSS by running the following command in a separate terminal:
    - `npm run tailwind`
    - `make sure that both npm start and tailwind are running concurrently`
4. The application should now be running at http://localhost:3001 by default.

## License

`Copyright © 2023 Jesse Chen,Renny Mwangi,Mohammed Arshad,Tanya Du`

```
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Contribution Guidelines
```
1. Familiarize yourself with MIT license terms
2. Clone the project's repository to your local machine.
3. Create a seperate branch of your work.
4. Develop well-structured and well-documented code.
5. Run tests to ensure your changes work.
6. License your contributions under the terms of the MIT License.
7. Be respectful and collaborative in discussions.
```


## Links 
[![badge](https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=White)](https://github.com/JesseCh3n/entertainment_review)
[![badge](https://img.shields.io/badge/Heroku-black?style=for-the-badge&logo=heroku&logoColor=White)](https://evening-cove-52840-9f06a2ce0b05.herokuapp.com/)

[Github Repository](https://github.com/JesseCh3n/entertainment_review) 

[Heroku application](https://evening-cove-52840-9f06a2ce0b05.herokuapp.com/)



