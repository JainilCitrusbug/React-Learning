import React, { Component } from 'react'

class Perent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Hello, I'm Jainil."
        }
    }

    change = () => {
        const message = this.state.message
        this.setState({
            message: message.toUpperCase()
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button>Change</button>
        </div>
        )
    }
}

export default Perent