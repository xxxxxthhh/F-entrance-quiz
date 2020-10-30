/*
 * @Author: Kyle Xu
 * @Date: 2020-10-27 23:27:55
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-10-28 00:00:15
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import React, { Component } from 'react';

class StuView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null,
    };
  }

  componentDidMount() {
    this.getStuList();
  }

  getStuList = () => {
    // TODO GTB-工程实践: * 建议把数据请求提取到单独的service
    const url = 'http://localhost:8080/students';
    const params = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };
    fetch(url, params)
      .then((res) => res.json())
      .then((data) => this.setState({ students: data }));
  };

  render() {
    return (
      <div className="stuList">
        <div>
          {this.state.students?.map((student) => (
            // TODO GTB-知识点: * 这块在group 里面也会用到，可以提取成公共组件
            <span className="student" key={student.stuId}>
              {student.stuId}
              {student.stuName}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default StuView;
