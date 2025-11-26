Building a simple REST API with NodeJS and Express: Please remember the
    difference between serving a static page data and serving dynamic data. Serving static
    files is serving your HTML, CSS and JavaScript pages as they are. The reason they’re
    called static files is because they are not changed by the server nor run, they’re merely
    sent back as files for your browser
    
Steps to building a RESTful API using Express server

     Step 1: Create folder and open it with VSCode
     Step 2: Open terminal/commandliine at this folder
o We can assume that you have Node.js installed on your
    computer. To check, just type this on your terminal to see which
    version of Node you have: node –v
● Step 3: Now, initialize a new app by typing this: npm init. This will
    create your package.json file and your entry point (index.js is the default
    file name). There are a series of questions you have to click enter for so
    that your package.json and your entry point files are clreated
● Step 4: Install Express.js app from your terminal by typing this: npm
    install express –save
● Step 5: Create your app file, example, app.js in your folder
● Step 6: Create your express server
```jsx
 var express = require("express");
 var app = express();
```
● Step 7: Set the app you created to listen to a specific port, example, port 3333.
```jsx
 app.listen(3333, () => {
    console.log("Server listening at port 3333");
 });
```
o Your app will now be accessible using http://localhost:3333
● Step 8: Run your localhost by typing this on your browser:
http://localhost:3333
o Here, you will get “Cannot GET/” message on your browser
    because you do not have an API end point set yet (there is no
    URL route you set up using GET for your app) but express is
    responding with the error message
● Step 9: A server receives requests, processes them and returns a
    response. So, you need to use routes to handle this request. The requests
    can be a GET, POST, PUT or DELETE ones. For our purpose, go ahead
    and create a simple GET request that returns a list of users. Make your
    event handler function allow the express app to use the “/users” url to
    trigger the callback that follows it.
```jsx
app.get("/female", (req, res) => {
 res.send({
    name: "Alem",
    age: 33,
 });
})
```
● Step 10: Run your app using this command: node app.js
● Step 11: To view our data, open your localhost (browser) and enter
http://localhost:3333/users. You will see a response with JSON format on
your localhost/browser.
□ Congrats, you just built a simple useless REST API with NodeJS and Express 🤣
□ Note (building an API without code): Building an API without writing lengthy
code is getting easier with ready-made tools like Sheetsu, Airtable, WrapAPI and
Bubble.