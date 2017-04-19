# Movies-App API Project, Node, Express, Swagger and Mongo 


This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](http://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**N**ode.js](https://nodejs.org): runtime environment

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](http://www.mongodb.com)
2. From project root folder install all the dependencies: `npm i`

## CLOUD URL
1. The application has been deployed to Heroku - Cloud Application Platform. 
2. Visit this link to test the application: [https://heroku-node-movies-api.herokuapp.com/api-docs/index.html/](https://heroku-node-movies-api.herokuapp.com/api-docs/index.html/)

## Run
1. Command window 1: `npm start`: run Express server
2. Go to [localhost:8080](http://localhost:8080)
3. Database for the application is placed on Mongo-lab. In order to connect to it, use the following connection settings from any local mongo db client (like RoboMongo):
   `Database: ds161640.mlab.com`,
   `Port: 61640`,
   `Database User: admin`,
   `Database User's password: admin`.		

4. In order to test APIs using Swagger, you need to first generate access-token using the endpoint:
	https://heroku-node-movies-api.herokuapp.com/api-docs/index.html#!/API_Authentication/post_api_authenticate
	Here you need to pass the following json : 
	{
	  "name": "rahul",
	  "password": "srivastava"
	}

	(These user credentials can be modified through user collection in mongo lab database)

	This will generate your Access Token which remains valid for a day.

5. Once your access token is generated, you need to copy token and paste in "api-key" text box next to Explore button at the top.
6. After, this you can test any other API and your access token will be utlized in all the future requests.

 



### Author
* [Rahul Srivastava](https://github.com/rahul-openstack)
