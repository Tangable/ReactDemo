import React from 'react';
import "./Login.css";
import {Link} from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props){
        super(props);   //拿到父组件中的props
        console.log('constructor')
    }

    componentWillMount(){
        console.log('componentWillMount')
    }
    
    /**
     * 组件渲染完成
     */
    componentDidMount(){
        console.log('componentDidMount')
    }

    render() {
        return (<div>
            <img className="login-background" src="https://accounts.gizwits.com/static/login/login.background.ecc4ca0522ea.jpg"></img>
            <div className="login-2017">
                <div className="login-2017-topbar">
                
                    <ul className="login-2017-link">
                        <li>
                           <a href="">首页</a>
                        </li>
                    </ul>
                </div>
                <div className="login-2017-body">
                    <div className="login-2017-body-box">
                        <div className="login-form-wrap">
                            <div className="form-login-label">
                                <label>用户登录</label>
                            </div>
                            <div className="form-user-name form-input-ll">
                                <input type="text" className="form-input input-hight-color" placeholder="邮箱/用户名/手机号"></input>
                            </div>
                            <div className="form-user-password form-input-ll">
                                <input className="form-input input-hight-color" type="password" placeholder="登录密码"></input>
                            </div>
                            <div className="form-user-authcode form-input-ll">
                                <input className="form-input input-hight-color" type="type" placeholder="验证码"></input>
                            </div>
                            <div>
                                <input className="form-submit" type="submit"></input>
                            </div>
                            <div className="link-box">
                                <a className="forget-password-label label-hover">忘记密码</a>
                                <Link to="/register"><a className="user-login-label label-hover">立即注册</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}