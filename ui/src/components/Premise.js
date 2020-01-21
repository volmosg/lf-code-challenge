import React, {Component} from 'react';

class Premise extends Component {

    render() {
        return(
            <div>
                The main requirement of the task was creating a new endpoint to the API
                allowing the users to update the greetings they created.
                <br />
                This page is a very basic prototype of a UI that utilizes this endpoint.
                <br />
                First time you open this React application, you will see the default greeting.
                I used Axios to perform a GET request.
                <br />
                If you click the button ("Update greeting"), you will be calling a function that will
                perform a PUT request. Given a URL containing the ID of the greeting, a PUT request allows the user
                to modify the body of the JSON. This case is just a mockup in which I already provided this information
                to modify the message of the default greeting.
            </div>
        )
        
    }
}

export default Premise;