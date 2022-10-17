import React, { Component } from 'react'

class ChangeCase extends Component {

    constructor() {
        super()
        this.state = {
            message: "" 
        }
    }

    changeMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    upperCase = () => {
        const message = this.state.message
        this.setState({
            message: message.toUpperCase()
        })
    }

    lowerCase = () => {
        const message = this.state.message
        this.setState({
            message: message.toLowerCase()
        })
    }

    render() {
        return (
        <div>
            <textarea onChange={this.changeMessage} value={this.state.message}></textarea>
            <div>
                <button onClick={this.upperCase}>Upper Case</button>
                <button onClick={this.lowerCase}>Lower Case</button>
            </div>
            <h1>Message: {this.state.message}</h1>
        </div>
        )
    }
}

export default ChangeCase;