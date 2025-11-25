Why do organizations provide their APIs to the public for free (open API)?
    Investing in APIs unlocks digital transformation and increases a company's competitive
    position.
o Brand building: When a company provides its API for the public for free, it will
    allow them to reach more people than they could ever do on their own.
o Advertising money: Some API consumers integrate advertising in their apps,
    providing revenue for the API provider. In turn, the API provider shares some of
    that advertising revenue with API consumers.
▪ Why companies provide APIs but never the direct access to their database? If you
    are an owner of an application, and you are willing to open some of the data in your
    database to employees (like developers) or the public (like external developers), you do
    not want to provide the public with a direct access to your database. What you prefer to
    do is, to create an interface (API) that returns some pre-selected list of things as per the
    developer's request. Note: It would be the application owner's responsibility to write the
    interface code (API) that returns the requested data. So, why not provide direct access to
    your database?
o Security: The data in a company’s database contains various facts about the
    company, the company’s customers and its employees that should be kept away
    from public.
● Example: If a user has unrestricted SELECT on a table, they can select
    any record on that table, even those not belonging to them. A salary table
    would be a bad one. If any user has DELETE or UPDATE, they may
    forget the WHERE clause, and there goes your table.
● Note: However, some group of employees, like data base administrators
    (DBAs), need direct access in order to do their job.
o To provide only relevant data for API consumers: People accessing the data
    (through API) should only have access to data that is relevant to their application
    or relevant for role (if data is to be used by an employee of the API provider).
o To allow people with no SQL/programming knowledge simply access data:
    To directly retrieve data from a database, the user must be able to write code to
    query from the database (example: SQL query). Very few employees possess
    such skills and would not be able to accurately retrieve the data that they need.
