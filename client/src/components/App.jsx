import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentInput: '',
            toDos: []
        }
    }

    render() {
        return (
            <div>
                Basic CRUD To Do
                <br/>
                To Do: <input type="text" value = {this.state.currentInput}></input>
                <br/>
                <br/>
                Current To Dos:
            </div>
        )
    }
}

export default App