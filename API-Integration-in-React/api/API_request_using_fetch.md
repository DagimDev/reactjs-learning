Making an API request using fetch(): fetch() API is a JavaScript method (built in the
    browser) for getting resources from a server or in short for consuming REST APIs from.
□ Syntax: fetch(resource, options)
● resource: This is a mandatory parameter that defines the resource that
    you wish to fetch. This is basically the URL of the request
● options: This is the second and the optional parameter of fetch() that lets
    ou configure the request. The most useful options are:
o options.method: This is HTTP method to perform the request
    (GET, POST, DELETE, PUT or UPDATE),
o options.body: the body of the HTTP request. For example. If
    you are using a POST request, body will be where the data you
    are posting/inserting will go
o option.headers: an object with the headers to attach to therequest.

Calling fetch() returns a promise: fetch() starts a request and returns a promise.
    When the request completes, the promise resolves to the response object. This
    response object provides useful methods to extract data with formats. But to
    parse data from JSON, you need just one method the response.json() method.
□ Fetch()’s optional parameter: You can also optionally pass in an init options
    object as the second argument. Note: The response we get from fetch() API
    method is just a regular HTTP response and not the actual JSON. In order to get
    the JSON body content from the response, we have to change the response to
    actual JSON using the json() method on the response. Note: Because fetch()
    method comes as inbuilt with the browser, we do not need to install it (if we were
    to use it in React) or add it as a CDN (in vanilla JavaScript)