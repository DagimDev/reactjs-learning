What is JSON? Why is JSON format preferred to transmit data in web
applications?
● What is JSON? JSON stands for JavaScript Object Notation. Just like XML, JSON is
    also a format for storing and transporting data. JSON is the most widely used data format
    when exchanging data between two applications (or between 2 two servers the
    application is hosted at). The standard file type for storing a JSON document in the
    filesystem is .json.
● Why is JSON preferred as a way of sending data between applications? All modern
    programming languages like Java, JavaScript, Ruby, and Python provide excellent
    support for producing and consuming JSON data.
▪ Its simplicity: JSON is a human readable as well as a machine-readable format.
    So, while applications/libraries can parse the JSON documents, humans can also
    look at the data and derive the meaning from it.
▪ JSON data is easy to manipulate at client side: We cannot manipulate an XML
    data as easily on the client-side, especially in browsers. It ends up being a lot of
    extra work just to do normal data transfer.
▪ JSON is very similar with how JavaScript structures objects: Because of this
    similarity, a JavaScript program can easily convert JSON data into native
    JavaScript objects.

REST APIs accept JSON for request and send responses to JSON: JSON is the
    standard for transferring data and REST APIs accept requests for JSON data and send a
    response in JSON format. Note: JavaScript has built-in methods to encode and decode
    JSON either through the Fetch API or another HTTP client. There are methods that we
    can use to make sure our REST API app responds with JSON (example, by setting
    Content-Type in the response header to “application/json”).
