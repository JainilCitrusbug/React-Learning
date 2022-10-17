import React, {Component} from "react";

// function Welcome() {

    

//     return <h1>I'm Jainil.</h1>
// }

class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            message: "Welcome Jainil" 
        }
    }

    changeMesage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMesage()}>Subscribe</button>
            </div>
        )
    }
}

export default Welcome;