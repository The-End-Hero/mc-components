import * as classnames from 'classnames';
import * as React from 'react';// ?
// import {ReactDOM} from 'react-dom';
// const classnames = require('classnames');
import '../SnackBar.css'

interface IFSnackBarState {
    hide: boolean
}

interface IFSnackBarProps {
    hasClose: boolean,
    delay: number,
    onClose: any
}

class SnackBar extends React.Component <IFSnackBarProps> {
    public state: IFSnackBarState;
    private time1: any;
    private time2: any;

    constructor(public props: any) {
        super(props)
        this.state = {
            hide: false
        }
        this.time1 = null
        this.time2 = null
    }

    public componentDidMount() {
        this.close()
    }

    public close() {
        const {hasClose, delay, onClose} = this.props
        const t = this
        if (!hasClose) {
            t.time1 = setTimeout(() => {
                t.setState({hide: !t.state.hide})
                t.time2 = setTimeout(() => {
                    onClose()
                }, 1000)
            }, delay * 1000)
        }
    }

    public enter = () => {
        clearTimeout(this.time1)
        clearTimeout(this.time2)
    }

    public leave = () => {
        this.close()
    }

    public clickClose = () => {
        const {onClose} = this.props
        const {hide} = this.state
        this.setState({hide: !hide})
        setTimeout(() => {
            onClose()
        }, 1000)
    }

    public render() {
        const {type, msg, hasClose} = this.props
        const {hide} = this.state
        return (
            <div className={classnames('mc-message animated', {
                fadeOut: hide,
                'mc-msg-error': type === 'error',
                'mc-msg-info': type === 'info',
                'mc-msg-success': type === 'success',
                'mc-msg-warning': type === 'warning',
                slideInDown: !hide,
            })} onMouseEnter={this.enter} onMouseLeave={this.leave}>
                <div>{msg}</div>
                {
                    hasClose &&
                    <i className="mc-msg-icon material-icons"
                       onClick={this.clickClose}>close</i>
                }
            </div>
        )
    }
}

/**
 * 使用说明
 * import snackbar from 'snackbar'
 * snackbar.info(a,v,b,n)
 * @type {{info: _default.info}}
 * @private
 */
// const ReactDom = require('react-dom');
import * as ReactDom from 'react-dom';

const SB_DEFAULT = {
    /**
     * 参数
     * @param type 信息类型 success|error|info|warning  string 默认success
     * @param msg  snackbar展示文字  string
     * @param hasClose 是否有关闭按钮，如果有，则不会自动关闭。 bool 默认为false
     * @param delay 自动关闭时间(秒) num 默认为5
     */
    info: (type = 'success', msg = 'this is alertmsg', hasClose = false, delay = 5) => {
        const div: any = document.createElement('div')
        const MC_DOM: any = document.querySelector('#mc-snackbar')
        if (MC_DOM) {
            MC_DOM.appendChild(div)
            const close = () => {
                ReactDom.unmountComponentAtNode(div)
                div.parentNode.removeChild(div)
            }
            ReactDom.render(<SnackBar type={type} msg={msg} hasClose={hasClose} onClose={close} delay={delay}/>, div)
            // !hasClose && setTimeout(close, delay * 1000)
        } else {
            // div.style.display='flex'
            div.id = 'mc-snackbar'
            document.body.appendChild(div)
            const rot: any = document.createElement('div')
            div.appendChild(rot)
            const close = () => {
                ReactDom.unmountComponentAtNode(rot)
                rot.parentNode.removeChild(rot)
            }
            ReactDom.render(<SnackBar type={type} msg={msg} hasClose={hasClose} onClose={close} delay={delay}/>, rot)
            // !hasClose && setTimeout(close, delay * 1000)
        }
    }
}
export default SB_DEFAULT
