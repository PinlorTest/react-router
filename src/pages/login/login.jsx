import React from "react";
import { Button, Input, Form, Icon } from "antd";
import "../../App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogin = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        localStorage.setItem("username", values.username);
        // this.props.history.push("/")
      }
    });
  };
  render() {
    console.log("我进来啦");
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App">
        <header className="App-header">
          <Form>
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "请输入用户名" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码" }]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Button type="primary" onClick={() => this.handleLogin()}>
              登录
            </Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default Form.create({ name: "login_name" })(Login);
