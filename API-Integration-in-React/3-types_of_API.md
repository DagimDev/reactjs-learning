Types of API (Web API, Program API and Local API): We said that an API is a set of
definitions and protocols used to integrate data from one application into another.
    o First party API vs third party API: To choose between first and third party
        APIs, developers need to look at what the API will do for the organization’s
        customers. If an AAPI is going to be very specific for a client's need, then a first
        party API might be a better option. However, if the API’s purpose is general,
        developers should save money by using third party APIs.
                
        ● First party API: A First Party API is an API that was made in-house by
            the internal developers and is not requested by any third parties.
            Developing first party APIs is needed when there is a need to monitor the
            entire API lifecycle or when unique client cases or when there is a
            security need. However, developing and implementing an API in-house
            is expensive, takes time/ resources and requires constant upkeep by the
            API developers whenever your code or project changes.
        ● Third party API: Third party APIs are APIs developed by a third party
            organization and not developed by in-house by the internal developers.
            A third-party API integration happens when a business uses a
            third-party's API to power its web service. For the most part, third party
            APIs are reliable in providing you with all the data you might need to run
            your business, without the hassle of developing it yourself. However,
            these APIs will have their own rules for use and might require extra
            effort to integrate them with your application. However, that is not a
            huge problem to overcome.
        o For instance, if your business uses/integrates Google's open
        weather API for your business’ website.
    
REST/RESTful API vs Web API vs SOAP API: APIs are tools we use to transfer data
    from one app to another and this transfer requires clear protocols and architectures. API
    protocols/architectures are the rules that govern an API's operation.

Client: The client is the person or software who uses the API. For example, you,
    as a developer, you can call Facebook’s API to read and write data from
    Facebook by reading/creating a new post. The client can also be a software, like,
    the web browser. When you browse Facebook’s website, your browser is the
    client who calls Facebook’s API and uses the returned data to render information
    on the browser.

Resource: By resource we mean any data (object) provided by an API. For
    example, Google's map API provides resources like city names, zip codes or
    other information.

Web API: Web API as the name suggests, is an API over the web/internet which
    can be accessed using HTTP protocol. A Web API can be developed using
    various technologies like Java and ASP.NET. These APIs can be RESTful or not.
    Most HTTP APIs we write are not RESTful. This framework implements HTTP
    protocol specification and hence you hear terms like URIs, request/response
    headers, caching, versioning, various content types(formats)

REST: REST stands for REpresentational State Transfer. REST is architectural
    style, or it is the rules and constraints one must follow when building APIs (or
    when writing code to request data from a server). In short, it is the rule one must
    follow when writing the code (API) to request data from server of an
    application/website.
    
REST/RESTful API: A REST API is an API that is backed by the architectural
    style of REST. In A RESTful website/application, it is the representation of the
    state of the resource that is transferred to the requesting client mainly via HTTP.
    The representation of the resources can be delivered via HTTP in one of these
    formats: JSON (JavaScript Object Notation), HTML, XLT, Python, PHP, or plain
    text. JSON is the most generally popular file format to use because, despite its
    name, it is as readable by both humans and machines. Therefore, REST API is
    basically like using a website from your browser. In both website browsing and
    REST API calling, you make a call from a client/browser to a server of another
    application, and you will get data back as a response with HTTP protocol.
    However, in API call, instead of clicking buttons or filling out forms from the
    browser, you write code to explicitly request data from a server. In addition,
    unlike requesting a website from your browser, when you make an API
    request/call, you will receive the file in JSON/XML format, not in HTML format.
    Example: Let us request for GitHub’s home page by typing the
    https://github.com/ URL into our browser. Here, you will get the response in
    HTML format. Now, let us request for GitHub’s API by typing the
    https://api.github.com/ URL into the browser. Guess what, we just made an API
    request in our browser to GItHub’s API. Notice here, the response is a JSON
    format that has resources like the URLs for the current GitHub user, URL for
    their followers, etc.

Criteria to make an API a RESTful API
    ● Requests must be managed through HTTP: The client-server
        architecture has to be made up of clients, servers, and resources, with
        requests managed through HTTP
    ● Stateless client-server communication: We said that API is basically
        how one application (Ex. website) transfers data to another application.
        For an API to be RESTful, the communication between the
        communicating applications has to be stateless. Meaning, neither the
        requesting application nor the state/data providing application store data
        about each other whenever there is an API call from one to another.
    ● Data must be transferred in a standard form:
    o Resources requested must be identifiable and separate from the
        representations sent to the client
    o Representation of the resources sent to the client must be
        self-descriptive with enough information to describe how the
        client should process it.
    o The representation of resources sent to the client must be
        manipulatable by the receiving client because the representation
        contains enough information about the resource to do so.
    
CRUD and HTTP in REST APIs: Both REST and CRUD describe manipulating data
    on a database. CRUD commands often play a role in REST APIs, where they map (not
    perfectly) to the HTTP methods GET, POST, DELETE, PUT, and PATCH.
