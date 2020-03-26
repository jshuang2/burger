## Burger Devouring App

A simple application that demonstrates the use of ORM (object relational map) to handle database data--in this case, SQL data. This app's file structure was created with MVC in mind.

### Technologies Used
 - MySQL
 - Node
 - Express
 - Handlebars NPM package

## How it works

1. A simple UI displays burgers that have been either `devoured` or `not devoured`.

2. When a user clicks on the appropriate `Eat me` or `Don't eat me` buttons, the burger will move over to the appropriate section of `devoured` or not. In the backend, SQL automatically makes an update query with the help of our homemade ORM.

3. Should a user want to add a new burger to the list, they can enter the name of the new burger and select whether it has been devoured or not via a radio check box. The new burger will then show up in the appropriate section.

#### Choosing to devour a burger or not will update the SQL database appropriately

![Burger Log](https://user-images.githubusercontent.com/52802240/77705269-75ba6880-6f7c-11ea-83f2-1f0307df6d63.gif)

---

## Installation and Setup Instructions


If you'd like to view the app locally, you may clone down this repository. You will need `node`, `npm`, and `MySQL` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:8080`  

---

## Reflection

This was a small week long project in late 2019 that really taught me the ins and outs of database management. SQL is a very powerful query language that I will definitely take advantage of in future projects.

I began this project with a basic understanding of ORMs and database management, but have now come out of it with an understanding of why prebuilt ORM libraries like Mongoose (MongoDB) and Sequelize (SQL) exist. Creating the code for your own ORM to interact with databases can be somewhat cumbersome.

I did have trouble hosting this project on Heroku, so that's something I will try to tackle again in the future. So as of now, the project can only be viewed locally.

