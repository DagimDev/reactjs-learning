Making API call: An API call is the process by which a client application makes a
    request for data from an external server/application and the receiving server delivers the
    requested data back to the client. Traditionally, performance limitations dictated APIs to
    make synchronous requests which meant that users taking actions within an application,
    for example pulling specific info from a database had to await a backend response before
    continuing onward.
▪ Almost all API calls are asynchronous: Almost modern applications are designed to
    scale quickly with user activity and more user activity means more requests. Due to that,
    most APIs these days make asynchronous requests. to We know that asynchronous APIs
    are great in instances where user activity is heavy. Asynchronous API requests excel at
    executing background tasks without getting in each other’s way.
General steps to make an API Call:
□ Find the URI of the external server or program: To make an API call, the first
    thing you need to know is the Uniform Resource Identifier (URI) of the server or
    external program whose data you want. This is basically the digital equivalent of
    a home address. Without this, you will not know where to send your request.
    Example: We can use reqres’ fake API and apply this URI as their server’s
    address where we can send our request to: https://reqres.in/api/users
□ Add an HTTP verb: Once you have the URI, then you need to make a request
    by including either one of these verbs: GET, POST, PUT, DELETE. Example:
    Nationalize.io provides a public API whereby we can predict nationality of a
    person based on name we provide. If you make a request for the name “Mekdes”
    from Nationalize.io using its server’s URI
    (https://api.nationalize.io/?name=mekdes) using the GET verb, the GET request
    tells their server to search its database for the name “Mekdes” and provide you
    with the requested data, i.e., the predicted name of the country the name
    “Mekdes” belongs to in a JSON format. Below, look at the output in JSON
    format.
□ Include an API key: API key is a unique identifier made of up of a string of
    letters and numbers used to authenticate calls to an API by identifying the client
    app making the request. API key also tracks the number of requests made for
    usage and billing purposes.
□ Wait for the response
