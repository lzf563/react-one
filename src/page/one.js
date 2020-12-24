import React from 'react';

import { Button } from "antd";

class one extends React.Component{
    render(){
        return(
            <div>
                <h1>这个是one页面出来的时候。</h1>
                <Button type="primary">点击按钮</Button>
            </div>
        )
    }
}
export default one;