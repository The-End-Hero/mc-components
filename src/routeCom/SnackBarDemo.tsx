import * as React from 'react';
import SnackBar from '../components/SnackBar/SnackBar'

const error = 'error'
const success = 'success'
const info = 'info'
const warning = 'warning'

class SnackBarDemo extends React.Component {
    public show = (type: string) => {
        SnackBar.info(type, '!!!s室内设计师你室内设计')
    }

    public render() {
        return (
            <div>
                <button onClick={(e) => {
                    this.show(error)
                }}>{error}</button>
                <button onClick={(e) => {
                    this.show(success)
                }}>{success}</button>
                <button onClick={(e) => {
                    this.show(info)
                }}>{info}</button>
                <button onClick={(e) => {
                    this.show(warning)
                }}>{warning}</button>
            </div>
        );
    }
}

export default SnackBarDemo;
