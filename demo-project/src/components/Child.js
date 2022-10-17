import React, { Component } from 'react'

class Child extends Component {


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button>Change</button>
            </div>
        )
    }
}

export default Child