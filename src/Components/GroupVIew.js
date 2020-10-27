/*
 * @Author: Kyle Xu
 * @Date: 2020-10-27 21:43:21
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-10-27 23:26:30
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import React, { Component } from 'react';

class GroupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null,
      //   currentStu: 1,
    };
  }

  componentDidMount() {
    this.getStuList();
  }

  getStuList = () => {
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

    // console.log(111);
    console.log(this.state.students);
    // if (!this.state.students) {
    //   this.setState({ currentStu: 0 });
    // }
  };

  render() {
    return (
      <div className="groupList">
        <div>1 组</div>
        <div>2 组</div>
        <div>3 组</div>
        <div>4 组</div>
        <div>5 组</div>
        <div>6 组</div>
        <div>
          第七组
          {this.state.students?.map((student) => (
            <div className="student" key={student.stuId}>
              {student.stuId}
              {student.stuName}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GroupView;
