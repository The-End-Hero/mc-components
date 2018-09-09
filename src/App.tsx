import * as React from 'react';
// import SnackBarDemo from './routeCom/SnackBarDemo'
// import { Route} from 'react-router-dom'
// import {withStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {Header, Content, Footer} = Layout;
import './App.css';

// const styles = {
//     root: {
//         flexGrow: 1,
//     },
// };

class App extends React.Component {
    public state = {
        value: 0,
    }
    public handleChange = (event: any, value: any) => {
        this.setState({value});
    };

    public render() {
        return (
            <Layout style={{height: '100vh', minHeight: 500}}>
                <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['Front-end-knowledge']}
                        style={{lineHeight: '64px'}}
                    >
                        <Menu.Item key="Front-end-knowledge">
                            <Icon type="google"/>Front-end-knowledge
                        </Menu.Item>
                        {/*<Menu.Item key="2">*/}
                            {/*<Icon type="amazon"/>后端*/}
                        {/*</Menu.Item>*/}
                        <Menu.Item key="Visual-layout">
                            <Icon type="highlight"/>可视化布局
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{
                    margin: '0 50px',
                    overflowY: 'auto',
                    marginTop: 64,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                        <Breadcrumb.Item>Front-end-knowledge</Breadcrumb.Item>
                    </Breadcrumb>
                    {/*<div style={{background: '#fff', padding: 24, minHeight: 1380}}>Content</div>*/}
                    <div style={{
                        flex: 1,
                        display:'flex'
                    }}>
                        <iframe style={{
                            display: 'block',
                            background: '#fff',
                            padding: 0,
                            border: 'none',
                            width: '100%'
                        }} src="http://127.0.0.1:3030"/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    ©2018 Created by Wxp
                </Footer>
            </Layout>
        );
    }
}

export default App;
