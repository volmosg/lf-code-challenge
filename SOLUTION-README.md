# Solution to code challenge
**Author**: Verónica Olmos González<br />
**Date**: 21/01/2020<br />

## Assumptions - definition of done
The main requirement for the challenge was creating a new endpoint allowing the user to update the greetings that they created.<br />
Having this in mind, I created a new endpoint that allowed that through a PUT request:<br />
- Given an ID, if the greeting already exists, it is modified as requested.<br />
- Given an ID, if the greeting does not exist, a brand new greeting is created (new random ID assigned).<br />

Also, I added a new endpoint allowing the user to delete an existing greeting (in a lenient assumption, deleting can be a hard form of updating).
This is done through a DELETE request.<br />

One of the unit tests for the controller (test returnsBadRequestWhenUnexpectedAttributeProvided) was failing due to some discrepancies in the error handling.  Due to time constraints, I took the assumption that a body not containing the attribute "message" was wrong (as in unprocessable entity) since after all the "message" attribute was empty.<br />

One of the requirements for extra points was creating a UI using this new endpoint.
For that purpose, I created a naive API in React. The index page is self-explanatory, but basically there's an initial GET request in order to show the default greeting. If you click a button, the message is updated through the PUT endpoint to a new greeting.<br />

## Technologies
Besides Gradle and Spring Boot, I used:<br />
- React.js for the UI. Axios for handling HTTP requests.<br />
- Advanced REST client Chrome plugin for consuming the REST API.<br />

## How to use the API
### User Interface
Since I developed the UI in React, it will run on port 3000.
First run the Spring Boot app on port 8080 and then the React app on port 3000.<br />
To start the Spring Boot app:
`gradlew bootRun`
To start the React app:
`cd ui`
`npm start`<br />
The React app consumes the REST API through Axios.
It only requests GET, for showing the default greeting and PUT, for updating the existing greeting.<br />
It's interactive in the sense that you can play with the button in order to do the PUT request, but it's not possible at the moment passing the values through something like a form.
In the HelloController class I added the annotation "CrossOrigin" on these two endpoints so it's possible to perform these requests.

### REST API
I tested the HTTP requests with the Advanced REST client plugin.
Once you run the application on a Tomcat server, it's possible to perform the following actions:<br />
- GET with an optional ID: if ID is not provided, it shows the default greeting. If an existing ID is provided, it displays the corresponding greeting.<br />
- POST: provided a valid message on the request body, it creates a new greeting with a randomly generated ID.<br />
- PUT: provided an ID, it updates an existing greeting (the ID remains the same). The new message has to be provided as a valid attribute in the body. If the ID doesn't exist, it creates a new greeting with randomly generated ID.<br />
- DELETE: provided an existing ID, it deletes the greeting.

## Limitations
As this challenge is open-ended, I assumed as source of limitations the use of a self-imposed reasonable amount of time. Due to this, of course my solution has some limitations.<br />

I will discuss some of them:<br />
- Testing: Some more unit tests could be done for the new endpoints. For example, if you try to update a non-existing greeting the message code is the same as when creating a new one, create validation rules for deletion and test them...<br />
- Error handling: As introduced, I took the assumption that it's OK to consider as error 422 having a valid body data-wise but with the wrong attribute (i.e. not containing the attribute "message").  This could be handled as a special case.<br />
- UI: The prototype is very basic, so a lot of improvement can be done. For example, the HTTP requests could be passed more interactively through a form, the remaining endpoints could be used, some CSS styling could be done...<br />

## Thank you
Thanks for taking the time to read this and evaluate my solution. From my side, I definetely enjoyed putting some time into it.
If you have any question or comment, don't hesitate to contact me :)
