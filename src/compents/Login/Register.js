import React from 'react';
import { createForm } from 'rc-form';
import { Form, Input, Button, Select, Row, Col, Popover, Progress } from 'antd';
import styles from "./Register.css";
const FormItem = Form.Item;
const {Option} = Select;
const InputGroup = Input.Group;
console.log(styles);
class Register extends React.Component{
    render(){
        const { form, submitting } = this.props;
        const { getFieldDecorator } = form;
        return(
            <div className={styles.main}>
               <h3>注册</h3>
               <Form>
               <FormItem>
                    {getFieldDecorator('mail', {
                    rules: [
                        {
                        required: true,
                        message: '请输入邮箱地址！',
                        },
                        {
                        type: 'email',
                        message: '邮箱地址格式错误！',
                        },
                    ],
                    })(<Input size="large" placeholder="邮箱" />)}
            </FormItem>
               </Form>
            </div>
        );
    }
}

export default Register = Form.create()(Register);