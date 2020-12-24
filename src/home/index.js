import React from 'react';

import { Layout, Button, Row, Col} from 'antd';
const { Header, Footer, Sider, Content } = Layout;



class home extends React.Component{
    render(){
        return(
            <div>
                <h1>这个是home页面出来的时候。</h1>
                
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <Button type="primary">点击按钮</Button>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
                
                <h2>这个是对layout进行分割来说的分割线</h2>

                <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
                </Layout>
                
                <Row>
                    <Col span={12}>这个是其中的一半</Col>

                    <Col span={12}>这个是另外的一半</Col>
                </Row>



            </div>
        )
    }
}
export default home;