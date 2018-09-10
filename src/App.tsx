import * as React from 'react';
import './App.css';
import SnackBarDemo from './routeCom/SnackBarDemo'
import { Route} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class App extends React.Component {
    public state = {
        value: 0,
    }
    public handleChange = (event: any, value: any) => {
        this.setState({value});
    };

    public render() {
        return (
            <div className="App">
                <Paper>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        centered={true}
                    >
                        <Tab label="SnackBarDemo" href="#/SnackBarDemo"/>
                        <Tab label="Item Two"/>
                        <Tab label="Item Three"/>
                    </Tabs>
                </Paper>

                <div>
                    <Route exact={true} path="/SnackBarDemo" component={SnackBarDemo}/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
