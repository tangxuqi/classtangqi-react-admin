//引入的模块
import React, { Component } from 'react';
import { Form, Input, Icon, Button } from "antd";
//自定的模块
import logo from "./logo.png";
import "./index.less";
//变量
const Item = Form.Item;
export default class Login extends Component {
  render() {
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
            <Input prefix={ <Icon type="user" /> } placeholder="用户名"/>
          </Item>
          <Item>
            <Input prefix={ <Icon type="lock" /> } placeholder="密码"/>
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