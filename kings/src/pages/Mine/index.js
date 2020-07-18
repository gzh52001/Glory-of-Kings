import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';

import './index.css';
class Mine extends Component {
    render() {
        return (
            <>              
                {
                    <div className='header'>
                        <a style={{display: 'block'}}>
                             <img src='https://shp.qlogo.cn/daoju/9999/9999_1/0'/>
                            <h4>游客</h4>
                        </a>
                       
                    </div>
                }
            </>
        )
    }
}

export default Mine;