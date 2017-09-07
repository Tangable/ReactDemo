import React from 'react';
import "./Login.css"

export default class Login extends React.Component {

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
                                <a className="user-login-label label-hover">用户注册</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}