import React, {Component} from 'react';
import axios from 'axios';
const HELLO_URL = "http://localhost:8080/hello"

class Hello extends Component {

    constructor(props){
        super(props);

        this.state = {
            greetings: []
        }

        this.updateGreeting = this.updateGreeting.bind(this);
    }

    

    componentDidMount() {
        const url = `${HELLO_URL}`;
        axios.get(url).then(response => response.data)
        .then((data) => {
            this.setState({greetings: data})
            console.log(this.state.greetings)
        })
    }

    updateGreeting(){
        const urlPut = `${HELLO_URL}`+"/default"
        axios.put(urlPut, {
            message: "How are you doing?"
        }).then(response => response.data)
        .then((data) => {
            this.setState({greetings: data})
        })
        //alert(urlPut);
    }

    render(){
        return (
            <div className="Hello">
                <h3>This is the default greeting:</h3>
                {this.state.greetings.message}
                <h3>Press here to update your greeting:</h3>
                <div>
                    <button onClick={this.updateGreeting}>Update greeting</button>
                </div>
            </div>
        )
    }
}

export default Hello;