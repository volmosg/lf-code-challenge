import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return(
            <p>
                Ideally, the information for updating the greeting should be provided by the user. For example,
                by means of a form.
                <br />
                There are other endpoints that are implemented in the API but not in this UI:
                    <ul>
                        <li>POST: to add new greetings. The ID will be randomly generated.</li>
                        <li>DELETE: to delete existing greetings given an ID.</li>
                    </ul>
            </p>
        )
        
    }
}

export default Footer;