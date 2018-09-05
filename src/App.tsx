import * as React from 'react';
import './App.css';
import SnackBar from './components/SnackBar/SnackBar'
import SnackBarDemo from './routeCom/SnackBarDemo'
import { Link , Route} from 'react-router-dom'

class App extends React.Component {
    public show = () => {
        SnackBar.info('error', '!!!s室内设计师你室内设计')
    }

    public render() {
        return (
            <div className="App">
                <div>123</div>
                <button onClick={this.show}>123</button>
                <Link to="/snackbardemo">snackbardemo</Link>
                <div>
                    <Route exact={true} path="/" component={SnackBarDemo}/>
                </div>
            </div>
        );
    }
}

export default App;
