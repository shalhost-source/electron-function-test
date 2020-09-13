import React from 'react';
import logo from './logo.svg';
import './App.css';
import fileDialog from 'file-dialog'

const path = require("path");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileOpenResult: "",
        };
    }

    click = () => {
        fileDialog()
            .then(file => {
                const data = new FormData()
                data.append('file', file[0])
                data.append('imageName', 'flower')
                this.setState({
                    fileOpenResult: path.join(file[0].path, file[0].name)
                });
                // Post to server
                // fetch('/uploadImage', {
                //   method: 'POST',
                //   body: data
                // })
            })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <button onClick={this.click}>test</button> <input type="text" name="fileOpenResult" value={this.state.fileOpenResult} size={20}/>
                </header>
            </div>
        );
    }
}

export default App;
