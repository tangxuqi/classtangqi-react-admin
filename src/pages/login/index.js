//引入的模块
import React, { Component } from 'react';
import { Form, Input, Icon, Button } from "antd";
//自定的模块
import logo from "./logo.png";
import "./index.less";
//变量
const Item = Form.Item;

 class Login extends Component {
   //这是自定义校正方法 validator
   //检验的input组件
   //校验的值
   //callback()没有值是就代表成功 有值代表校验失败 
   validator =(rule, value, callback) => {
     const passwordReg = /^\w+$/;
     const name = rule.field === "username"?"用户名":"密码";
     if (!value){
       callback(`${name}输入的值不能为空`);
     } else if (value.length<4) {
       callback(`${name}输入的值不能小于4位`);
     } else if (value.length>10) {
       callback(`${name}输入的值不能大于10位`);
     }
     else if (!passwordReg.test(value)) {
       callback(`${name}只能包含英文，数字，下划线`);
     }
     callback();
   };
  render() {
    //这是从form中提取的一个属性 作用是表单验证
//用法  {getFieldDecorator (标识符获取值的时候用的到，{rule:[{}]}) (需要校验的组件)}
    const { getFieldDecorator } = this.props.form;
    return <div className="login">
      <header className="login-header">
        <img src={logo} alt="logo"/>
        <h1>React项目:后台管理系统</h1>
      </header>
      <section className="login-section">
      <div className="login-container">
        <h2>用户登录</h2>
        <Form onSubmit={this.login}>
          <Item>
      {/*      {
              getFieldDecorator
              (
                'username',{
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    },
                    {
                      min:4 ,
                      message: '用户名最少输入4位'
                    },
                    {
                      max:10 ,
                      message: '用户名最多输入10位'
                    },
                    {
                      pattern:/^\w+$/,
                      message: '用户名只能包含英文，数字，下划线'
                    }
                  ]
                }
              )
              (
                <Input prefix={ <Icon type="user" /> } placeholder="用户名"/>
              )
            }
*/}

            {
              getFieldDecorator
              (
                'username',{
                  rules: [
                    { validator:this.validator }
                  ]
                }
              )
              (
                <Input prefix={ <Icon type="user" /> } placeholder="用户名"/>
              )
            }

          </Item>
          <Item>
            {
              getFieldDecorator
              (
                'password',{
                  rules: [
                    { validator:this.validator }
                  ]
                }
              )
              (
                <Input prefix={ <Icon type="lock" /> } placeholder="密码"/>
              )
            }
          </Item>
          <Item>
            <Button type="primary" htmlType="submit" >登录</Button>
          </Item>
        </Form>
      </div>
      </section>
    </div>
  }
}
//From.create 给Login组件添加 from的属性到props上用来做表单验证
//他是一个高阶组件，传入一个组件返回一个新组件
//新组件具备表单校验的功能
//经过 Form.create 包装的组件将会自带 this.props.form 属性，this.props.form 提供的 API
const newLogin = Form.create () (Login);
export default newLogin