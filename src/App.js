// create your App component here
// Write a componentDidMount method. Inside the method, 
// send a fetch request to http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
        spacePeople: []
        }
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({ spacePeople: people }))

    }

    render() {
        console.log(this.state.spacePeople)
        return (
            <div>
                <ul>
                    {this.state.spacePeople.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
}
