import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import SnackBar from './SnackBar/SnackBar'

class App extends React.Component {
    public show = () => {
        SnackBar.info('error', '!!!s室内设计师你室内设计')
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button onClick={this.show}>123</button>
            </div>
        );
    }
}

export default App;
